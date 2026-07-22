import { useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

// Highly artistic, hand-drawn wobbly-line Cat Head SVG (matching the user's sketch exactly)
const EliteCatHeadSVG = ({ className = "w-28 h-28" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`${className} stroke-stone-850 stroke-[2.2] fill-none select-none pointer-events-none`}
    style={{ filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.06))" }}
  >
    {/* Cat Head Base */}
    <path 
      d="M 22 42
         C 14 48, 14 66, 24 70
         C 32 74, 68 74, 76 70
         C 86 66, 86 48, 78 42
         C 72 38, 28 38, 22 42 Z" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />

    {/* Left Pointy Ear */}
    <path 
      d="M 24 43 
         C 20 28, 32 20, 35 22 
         C 37 24, 35 34, 33 39" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />
    <path d="M 28 36 C 26 31, 31 29, 32 32" strokeWidth="1.2" strokeLinecap="round" />

    {/* Right Pointy Ear */}
    <path 
      d="M 76 43 
         C 80 28, 68 20, 65 22 
         C 63 24, 65 34, 67 39" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />
    <path d="M 72 36 C 74 31, 69 29, 68 32" strokeWidth="1.2" strokeLinecap="round" />

    {/* Contented squinty/curved eyes */}
    <path d="M 29 52 C 31 55, 37 55, 39 52" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M 61 52 C 63 55, 69 55, 71 52" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Tiny Cat Nose and Smile */}
    <path d="M 49 58 C 50 57, 50 57, 51 58" strokeLinecap="round" />
    <path d="M 45 61 C 48 64, 52 64, 55 61" strokeLinecap="round" fill="none" />

    {/* Whisker strokes matching image exactly */}
    {/* Left Side */}
    <path d="M 20 57 L 10 56" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 20 61 L 8 62" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 22 65 L 12 68" strokeWidth="1.2" strokeLinecap="round" />
    {/* Right Side */}
    <path d="M 80 57 L 90 56" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 80 61 L 92 62" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 78 65 L 88 68" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Highly artistic, hand-drawn wobbly-line Dog Head SVG (matching the user's sketch exactly)
const EliteDogHeadSVG = ({ className = "w-28 h-28" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`${className} stroke-stone-850 stroke-[2.2] fill-none select-none pointer-events-none`}
    style={{ filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.06))" }}
  >
    {/* Head Outline - Shaggy/Scruffy zigzag outline */}
    <path 
      d="M 26 36
         C 22 31, 26 25, 32 24
         C 38 22, 62 22, 68 24
         C 74 25, 78 31, 74 36
         L 71 39 L 77 48 L 68 52 L 72 61 L 63 65 L 67 74 L 58 78
         C 55 81, 45 81, 42 78
         L 33 74 L 37 65 L 28 61 L 32 52 L 23 48 L 29 39 Z" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />

    {/* Left Shaggy Ear */}
    <path 
      d="M 28 27 
         C 15 24, 10 36, 8 44 
         C 6 48, 14 50, 18 46
         C 22 42, 26 34, 29 29" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />
    <path d="M 15 34 C 13 38, 16 41, 18 38" strokeWidth="1.2" strokeLinecap="round" />

    {/* Right Shaggy Ear */}
    <path 
      d="M 72 27 
         C 85 24, 90 36, 92 44 
         C 94 48, 86 50, 82 46
         C 78 42, 74 34, 71 29" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="fill-white"
    />
    <path d="M 85 34 C 87 38, 84 41, 82 38" strokeWidth="1.2" strokeLinecap="round" />

    {/* Big round friendly eyes */}
    <circle cx="39" cy="44" r="4.2" className="fill-stone-850 stroke-none" />
    <circle cx="37" cy="42" r="1" className="fill-white stroke-none" />
    
    <circle cx="61" cy="44" r="4.2" className="fill-stone-850 stroke-none" />
    <circle cx="59" cy="42" r="1" className="fill-white stroke-none" />

    {/* Nose */}
    <ellipse cx="50" cy="53" rx="5.5" ry="3.8" className="fill-stone-850 stroke-none" />

    {/* Happy smiling open mouth */}
    <path 
      d="M 37 57 
         C 39 63, 44 65, 50 64
         C 56 65, 61 63, 63 57" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Tongue hanging out */}
    <path 
      d="M 44 64 
         C 44 72, 56 72, 56 64 Z" 
      className="fill-rose-100" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path d="M 50 64 L 50 68" strokeWidth="1" strokeLinecap="round" />

    {/* Chin stroke under mouth */}
    <path d="M 42 71 C 46 75, 54 75, 58 71" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

interface ElegantDoodle {
  id: number;
  type: 'cat' | 'dog';
  x: number;             // Percent from left
  y: number;             // Scroll baseline Y (pixel height on the page)
  side: 'left' | 'right';
  scale: number;
  rotationOffset: number;
}

export default function ScrollingPaws() {
  const [doodles, setDoodles] = useState<ElegantDoodle[]>([]);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  // Set up a spring with low damping & high stiffness so the bounce is incredibly fast, snappy, and fluid!
  const springProgress = useSpring(0, { stiffness: 180, damping: 14 });

  useEffect(() => {
    // Generate beautiful, well-spaced, highly visible doodles (3 on left, 3 on right).
    const list: ElegantDoodle[] = [
      // LEFT SIDE
      {
        id: 1,
        type: 'cat',
        x: 1.5,
        y: 1150,
        side: 'left',
        scale: 1.1,
        rotationOffset: -12,
      },
      {
        id: 2,
        type: 'dog',
        x: 1,
        y: 2250,
        side: 'left',
        scale: 1.05,
        rotationOffset: 8,
      },
      {
        id: 3,
        type: 'cat',
        x: 1.8,
        y: 3350,
        side: 'left',
        scale: 1.15,
        rotationOffset: -5,
      },
      // RIGHT SIDE
      {
        id: 4,
        type: 'dog',
        x: 93,
        y: 1450,
        side: 'right',
        scale: 1.05,
        rotationOffset: 15,
      },
      {
        id: 5,
        type: 'cat',
        x: 93.5,
        y: 2600,
        side: 'right',
        scale: 1.15,
        rotationOffset: -10,
      },
      {
        id: 6,
        type: 'dog',
        x: 92.5,
        y: 3750,
        side: 'right',
        scale: 1.1,
        rotationOffset: 6,
      },
    ];
    setDoodles(list);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let frameId: number;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const currentTime = performance.now();

      const deltaY = currentY - lastY;
      const deltaTime = Math.max(1, currentTime - lastTime);

      const velocity = deltaY / deltaTime;

      setScrollPos(currentY);
      setScrollVelocity(velocity);

      lastY = currentY;
      lastTime = currentTime;

      springProgress.set(velocity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smoothly decay scroll velocity to zero when scrolling stops
    const decayLoop = () => {
      setScrollVelocity((prev) => {
        if (Math.abs(prev) < 0.01) return 0;
        return prev * 0.85; // Fast decay factor for rapid, responsive return to center
      });
      frameId = requestAnimationFrame(decayLoop);
    };
    frameId = requestAnimationFrame(decayLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [springProgress]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {doodles.map((item) => {
        const triggerPoint = item.y - 850;
        const distance = scrollPos - triggerPoint;

        let opacity = 0;
        let animatedX = 0;
        let scale = item.scale;
        let rotation = item.rotationOffset;

        if (distance > 0) {
          opacity = Math.min(0.95, distance / 250);

          const sideMultiplier = item.side === 'left' ? 1 : -1;
          const dynamicBounce = scrollVelocity * 130 * sideMultiplier;

          animatedX = Math.max(-55, Math.min(55, dynamicBounce));
          scale = item.scale * (1 + Math.min(0.25, Math.abs(scrollVelocity) * 0.4));
          rotation = item.rotationOffset + (scrollVelocity * 28 * sideMultiplier);
        }

        return (
          <motion.div
            key={item.id}
            className="absolute hidden lg:block"
            style={{
              left: `${item.x}%`,
              top: `${item.y}px`,
              opacity: opacity,
            }}
            animate={{
              x: animatedX,
              rotate: rotation,
              scale: scale,
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 18,
              mass: 0.6
            }}
          >
            <div className="cursor-pointer pointer-events-auto transform hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-md">
              {item.type === 'cat' ? (
                <EliteCatHeadSVG className="w-28 h-28 sm:w-32 sm:h-32 text-stone-850 hover:rotate-12 transition-transform duration-300" />
              ) : (
                <EliteDogHeadSVG className="w-28 h-28 sm:w-32 sm:h-32 text-stone-850 hover:-rotate-12 transition-transform duration-300" />
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Playful, rapid-moving mobile indicators that stay perfectly aligned */}
      <div className="lg:hidden absolute left-1 top-[1100px] opacity-60 animate-bounce duration-700">
        <EliteCatHeadSVG className="w-14 h-14" />
      </div>
      <div className="lg:hidden absolute right-1 top-[2200px] opacity-60 animate-bounce duration-700 delay-100">
        <EliteDogHeadSVG className="w-14 h-14" />
      </div>
      <div className="lg:hidden absolute left-1 top-[3300px] opacity-60 animate-bounce duration-700 delay-300">
        <EliteCatHeadSVG className="w-14 h-14" />
      </div>
    </div>
  );
}
