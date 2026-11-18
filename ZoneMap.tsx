import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ZONES } from './content';

const COLORS = ['#8cc7ea', '#5fb996', '#f4a784'];

export default function ZoneMap({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = L.map(ref.current, { scrollWheelZoom: false, zoomControl: true }).setView([43.7085, 7.29], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Scroll-wheel zoom only after a click, so the page can still be scrolled past the map.
    map.on('click', () => map.scrollWheelZoom.enable());
    map.on('mouseout', () => map.scrollWheelZoom.disable());

    const group = L.featureGroup().addTo(map);
    let cancelled = false;

    ZONES.forEach((z, i) => {
      const color = COLORS[i % COLORS.length];
      const style = { color, weight: 2, fillColor: color, fillOpacity: 0.3 };
      const tip = (layer: L.Layer) =>
        layer.bindTooltip(z.name, { permanent: true, direction: 'center', className: 'zone-label' });

      const circle = L.circle(z.center, { radius: z.radius, ...style });
      tip(circle).addTo(group);

      // Replace the circle by the real commune outline when the official API is reachable.
      fetch(
        `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(z.name)}&codeDepartement=06&fields=nom,contour&format=geojson&geometry=contour&limit=1`,
      )
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
        .then((fc) => {
          const f = fc?.features?.[0];
          if (cancelled || !f || f.properties?.nom !== z.name) return;
          group.removeLayer(circle);
          const shape = L.geoJSON(f, { style: () => style });
          tip(shape).addTo(group);
          map.fitBounds(group.getBounds(), { padding: [20, 20] });
        })
        .catch(() => {
          /* keep the circle */
        });
    });

    map.fitBounds(group.getBounds(), { padding: [20, 20] });

    return () => {
      cancelled = true;
      map.remove();
    };
  }, []);

  return <div ref={ref} role="region" aria-label={label} className="isolate h-[26rem] w-full overflow-hidden rounded-[2rem] ring-1 ring-navy/10 sm:h-[30rem]" />;
}
