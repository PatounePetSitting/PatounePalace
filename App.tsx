import { useEffect, useState, type FormEvent } from 'react';
import { CONTACT, IMG, T, ZONES, type Lang } from './content';

const SECTION = 'mx-auto w-full max-w-6xl px-5 sm:px-8';
const BTN =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-deep/50';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    /* storage unavailable */
  }
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-navy/50">· {children} ·</p>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const links = [
    { href: '#services', label: T.nav.services[lang] },
    { href: '#about', label: T.nav.about[lang] },
    { href: '#avis', label: T.nav.reviews[lang] },
    { href: '#faq', label: T.nav.faq[lang] },
  ];

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-navy/5 bg-cream/90 backdrop-blur">
        <div className={`${SECTION} flex h-16 items-center justify-between`}>
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            🐾 Patoune <span className="text-navy/50">Côte d’Azur</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-sky-deep">
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="rounded-full border border-navy/20 px-3 py-1 text-xs font-bold hover:bg-lavender"
              aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              {T.nav.lang[lang]}
            </button>
            <a href="#contact" className={`${BTN} bg-navy text-white hover:bg-navy/85`}>
              {T.nav.contact[lang]}
            </a>
          </nav>
          <button
            type="button"
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span className="block text-2xl leading-none">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-navy/5 bg-cream md:hidden">
            <div className={`${SECTION} flex flex-col gap-1 py-3 text-base font-semibold`}>
              {[...links, { href: '#contact', label: T.nav.contact[lang] }].map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-lavender">
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setLang(lang === 'fr' ? 'en' : 'fr');
                  setMenuOpen(false);
                }}
                className="mt-1 w-fit rounded-full border border-navy/20 px-4 py-1.5 text-sm font-bold"
              >
                {T.nav.lang[lang]}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-gradient-to-b from-sky via-mint/60 to-cream">
          <div className={`${SECTION} flex flex-col items-center py-14 text-center sm:py-20`}>
            <p className="rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy/70">
              {T.hero.kicker[lang]}
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] sm:text-6xl">
              {T.hero.title[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/75">{T.hero.text[lang]}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#services" className={`${BTN} bg-navy text-white hover:bg-navy/85`}>
                {T.hero.cta[lang]}
              </a>
              <a href="#estimer" className={`${BTN} bg-white text-navy ring-1 ring-navy/15 hover:bg-peach`}>
                {T.hero.ctaEstimate[lang]}
              </a>
            </div>
            <img
              src={IMG.hero}
              alt={lang === 'fr' ? 'Chat roux caressé et plissant les yeux de bonheur' : 'Ginger cat being stroked and squinting happily'}
              className="mt-12 aspect-[16/9] w-full max-w-4xl rounded-[2rem] object-cover shadow-xl shadow-navy/10"
              width={1408}
              height={768}
              fetchPriority="high"
            />
          </div>
        </section>

        {/* Trust */}
        <section aria-label={lang === 'fr' ? 'Garanties' : 'Guarantees'} className={`${SECTION} -mt-2 py-10`}>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {T.trust.map((t) => (
              <li key={t.title.fr} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                <div className="text-3xl" aria-hidden="true">{t.icon}</div>
                <h2 className="mt-3 font-display text-lg font-semibold">{t.title[lang]}</h2>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">{t.text[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-peach/50 py-16 sm:py-20">
          <div className={SECTION}>
            <Eyebrow>{T.services.eyebrow[lang]}</Eyebrow>
            <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{T.services.title[lang]}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-navy/70">{T.services.intro[lang]}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {T.services.items.map((s) => (
                <article
                  key={s.name.fr}
                  className={`relative flex flex-col rounded-3xl bg-white p-7 shadow-sm ${s.popular ? 'ring-2 ring-peach-deep' : 'ring-1 ring-navy/5'}`}
                >
                  {s.popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-peach-deep px-3 py-1 text-xs font-bold text-white">
                      {lang === 'fr' ? 'Le plus demandé' : 'Most popular'}
                    </span>
                  )}
                  <div className="text-3xl" aria-hidden="true">{s.icon}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.name[lang]}</h3>
                  <p className="mt-3">
                    <span className="text-sm text-navy/60">{T.services.from[lang]} </span>
                    <span className="font-display text-4xl font-semibold">{s.price}</span>{' '}
                    <span className="text-sm text-navy/60">{s.unit[lang]}</span>
                  </p>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                    {s.points[lang].map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-mint-deep" aria-hidden="true">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`${BTN} mt-7 bg-mint text-navy hover:bg-mint-deep hover:text-white`}>
                    {T.hero.cta2[lang]}
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-navy/60">{T.services.note[lang]}</p>
          </div>
        </section>

        {/* How */}
        <section className={`${SECTION} py-16 sm:py-20`}>
          <Eyebrow>{T.how.eyebrow[lang]}</Eyebrow>
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{T.how.title[lang]}</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {T.how.steps.map((s, i) => (
              <li key={s.title.fr} className="rounded-3xl bg-lavender/70 p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-lg text-white">{i + 1}</span>
                  <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{s.text[lang]}</p>
              </li>
            ))}
          </ol>
        </section>

        <Estimator lang={lang} />

        {/* Gallery */}
        <section className="bg-sky/50 py-16 sm:py-20">
          <div className={SECTION}>
            <Eyebrow>{T.gallery.eyebrow[lang]}</Eyebrow>
            <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{T.gallery.title[lang]}</h2>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {IMG.gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt[lang]} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${SECTION} py-16 sm:py-20`}>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
            <img
              src={IMG.sophie}
              alt={lang === 'fr' ? 'Sophie, pet sitter, sur un balcon face à la Baie des Anges' : 'Sophie, pet sitter, on a balcony overlooking the Baie des Anges'}
              loading="lazy"
              className="mx-auto aspect-[3/4] w-full max-w-sm rounded-[2rem] object-cover shadow-lg shadow-navy/10"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{T.about.title[lang]}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy/80">
                {T.about.text.map((p) => (
                  <p key={p.fr}>{p[lang]}</p>
                ))}
              </div>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={`${BTN} mt-7 bg-white text-navy ring-1 ring-navy/15 hover:bg-peach`}>
                Instagram @patounenice
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="avis" className="bg-mint/50 py-16 sm:py-20">
          <div className={SECTION}>
            <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{T.reviews.title[lang]}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {T.reviews.items.map((r) => (
                <figure key={r.name} className="rounded-3xl bg-white p-7 shadow-sm">
                  <div className="text-peach-deep" aria-label="5/5">★★★★★</div>
                  <blockquote className="mt-3 text-lg leading-relaxed">“{r.text[lang]}”</blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-navy/70">
                    {r.name} · {r.cat}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className={`${SECTION} py-16 text-center sm:py-20`}>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{T.zones.title[lang]}</h2>
          <p className="mt-3 text-navy/70">{T.zones.text[lang]}</p>
          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {ZONES.map((z) => (
              <li key={z} className="rounded-full bg-lavender px-4 py-2 text-sm font-semibold">
                {z}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-lavender/50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{T.faq.title[lang]}</h2>
            <div className="mt-10 space-y-3">
              {T.faq.items.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q.fr} className="rounded-2xl bg-white shadow-sm">
                    <h3>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : i)}
                      >
                        {f.q[lang]}
                        <span aria-hidden="true" className="text-xl">{open ? '−' : '+'}</span>
                      </button>
                    </h3>
                    {open && <p className="px-6 pb-5 leading-relaxed text-navy/75">{f.a[lang]}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`${SECTION} py-14`}>
          <Eyebrow>{T.more.eyebrow[lang]}</Eyebrow>
          <div className="grid gap-5 md:grid-cols-2">
            <a href="#estimer" className="rounded-3xl bg-peach p-8 text-center transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-3xl" aria-hidden="true">🧮</div>
              <p className="mt-2 font-display text-xl font-semibold">{T.hero.ctaEstimate[lang]}</p>
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-sky p-8 text-center transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-3xl" aria-hidden="true">📷</div>
              <p className="mt-2 font-display text-xl font-semibold">{T.more.insta[lang]}</p>
            </a>
          </div>
        </section>

        <ContactForm lang={lang} />
      </main>

      <footer className="bg-navy py-10 text-white">
        <div className={`${SECTION} flex flex-col items-center gap-3 text-center text-sm`}>
          <p className="font-display text-xl">🐾 Patoune Côte d’Azur</p>
          <p className="text-white/70">{T.footer.text[lang]}</p>
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href={CONTACT.phoneHref} className="hover:underline">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          </p>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Patoune Côte d’Azur. {T.footer.rights[lang]}</p>
        </div>
      </footer>
    </div>
  );
}

function ContactForm({ lang }: { lang: Lang }) {
  const f = T.form;
  const [service, setService] = useState(T.services.items[0].name[lang]);
  const serviceNames = T.services.items.map((s) => s.name[lang]);

  useEffect(() => {
    setService((cur) => {
      const idx = T.services.items.findIndex((s) => s.name.fr === cur || s.name.en === cur);
      return T.services.items[Math.max(idx, 0)].name[lang];
    });
  }, [lang]);

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    const v = (k: string) => String(d.get(k) ?? '').trim();
    const lines = [
      f.hello[lang],
      '',
      `${f.name[lang]} : ${v('name')}`,
      `${f.phone[lang]} : ${v('phone')}`,
      `${f.email[lang]} : ${v('email')}`,
      `${f.city[lang]} : ${v('city')}`,
      `${f.cat[lang]} : ${v('cat')}`,
      `${f.start[lang]} ${v('start')} ${f.end[lang].toLowerCase()} ${v('end')}`,
      `${f.service[lang]} : ${v('service')}`,
    ];
    if (v('notes')) lines.push('', `${f.notes[lang]} : ${v('notes')}`);
    return lines.join('\n');
  }

  function send(e: FormEvent<HTMLFormElement>, channel: 'whatsapp' | 'mail') {
    e.preventDefault();
    const form = e.currentTarget;
    const msg = buildMessage(form);
    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    } else {
      const subject = lang === 'fr' ? 'Demande de garde de chat' : 'Cat sitting request';
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    }
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base outline-none focus:border-sky-deep focus:ring-4 focus:ring-sky-deep/30';
  const label = 'block text-sm font-bold';

  return (
    <section id="contact" className={`${SECTION} py-16 sm:py-20`}>
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-lg shadow-navy/5 ring-1 ring-navy/5 sm:p-10">
        <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{f.title[lang]}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">{f.intro[lang]}</p>
        <form
          className="mt-8 grid gap-5 sm:grid-cols-2"
          onSubmit={(e) => send(e, 'whatsapp')}
        >
          <label className={label}>
            {f.name[lang]}
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className={label}>
            {f.phone[lang]}
            <input name="phone" type="tel" required autoComplete="tel" className={field} />
          </label>
          <label className={label}>
            {f.email[lang]}
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className={label}>
            {f.city[lang]}
            <input name="city" required className={field} />
          </label>
          <label className={label}>
            {f.cat[lang]}
            <input name="cat" required className={field} />
          </label>
          <label className={label}>
            {f.service[lang]}
            <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
              {serviceNames.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={label}>
            {f.start[lang]}
            <input name="start" type="date" required className={field} />
          </label>
          <label className={label}>
            {f.end[lang]}
            <input name="end" type="date" required className={field} />
          </label>
          <label className={`${label} sm:col-span-2`}>
            {f.notes[lang]}
            <textarea name="notes" rows={4} className={field} />
          </label>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
            <button type="submit" className={`${BTN} flex-1 bg-mint-deep text-white hover:bg-mint-deep/85`}>
              💬 {f.whatsapp[lang]}
            </button>
            <button
              type="button"
              className={`${BTN} flex-1 bg-navy text-white hover:bg-navy/85`}
              onClick={(e) => {
                const form = e.currentTarget.form!;
                if (form.reportValidity()) {
                  const msg = buildMessage(form);
                  const subject = lang === 'fr' ? 'Demande de garde de chat' : 'Cat sitting request';
                  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
                }
              }}
            >
              ✉️ {f.mail[lang]}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Estimator({ lang }: { lang: Lang }) {
  const e = T.estimate;
  const [idx, setIdx] = useState(0);
  const [qty, setQty] = useState(5);
  const plan = T.services.items[idx];
  const total = plan.amount * qty;

  return (
    <section id="estimer" className="bg-lavender/60 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Eyebrow>{e.eyebrow[lang]}</Eyebrow>
        <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">{e.title[lang]}</h2>
        <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
          <label className="block text-sm font-bold">
            {e.plan[lang]}
            <select
              value={idx}
              onChange={(ev) => setIdx(Number(ev.target.value))}
              className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base outline-none focus:border-sky-deep focus:ring-4 focus:ring-sky-deep/30"
            >
              {T.services.items.map((s, i) => (
                <option key={s.name.fr} value={i}>
                  {s.name[lang]} ({s.price} {s.unit[lang]})
                </option>
              ))}
            </select>
          </label>
          <label className="mt-5 block text-sm font-bold">
            {plan.per === 'visit' ? e.qtyVisits[lang] : e.qtyDays[lang]} : {qty}
            <input
              type="range"
              min={1}
              max={30}
              value={qty}
              onChange={(ev) => setQty(Number(ev.target.value))}
              className="mt-3 w-full accent-navy"
            />
          </label>
          <div className="mt-6 rounded-2xl bg-mint/70 p-5 text-center">
            <p className="text-sm font-bold text-navy/60">{e.total[lang]}</p>
            <p className="font-display text-5xl font-semibold" aria-live="polite">{total} €</p>
          </div>
          <p className="mt-3 text-center text-xs text-navy/55">{e.note[lang]}</p>
          <a href="#contact" className={`${BTN} mt-5 w-full bg-navy text-white hover:bg-navy/85`}>
            {e.cta[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
