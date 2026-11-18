/** Original line drawing of a sitting cat, used as a light decorative touch. */
export default function CatLine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M43 24 L41 6 L56 17" />
      <path d="M77 24 L79 6 L64 17" />
      <circle cx="60" cy="35" r="19" />
      <path d="M51 34 q3.5 -4 7 0" />
      <path d="M62 34 q3.5 -4 7 0" />
      <path d="M58 41 h4 l-2 3 z" fill="currentColor" />
      <path d="M40 38 l-12 -2 M40 42 l-12 3 M80 38 l12 -2 M80 42 l12 3" />
      <path d="M45 52 C35 72 35 92 51 95 L71 95 C87 92 85 72 75 52" />
      <path d="M77 90 C102 94 110 72 99 62" />
      <path d="M52 95 v-8 M68 95 v-8" />
    </svg>
  );
}
