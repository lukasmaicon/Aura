/** Marca Aura — avião (viagem), mesma cor accent e estilo do site. */
export function AuraLogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30 ${className}`}
    >
      <svg
        className="h-[22px] w-[22px] text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    </span>
  );
}
