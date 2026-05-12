import { useState } from "react";
import { AuraLogoMark } from "../ui/AuraLogoMark";

const navLinks = [
  { href: "#destinos", label: "Destinos" },
  { href: "#ia-roteiros", label: "IA de Roteiros" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface/60 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150 sm:px-6"
        role="banner"
      >
        <a
          href="#topo"
          className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-white"
          aria-label="Aura — início"
        >
          <AuraLogoMark />
          Aura
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#busca"
            className="inline-flex rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-lg shadow-accent/25 transition hover:bg-accent-muted"
          >
            Login
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-surface/90 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#busca"
              className="mt-2 block rounded-xl border border-white/10 px-3 py-2 text-left text-sm font-medium text-zinc-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              Suporte
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
