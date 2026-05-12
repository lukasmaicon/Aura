import { FormEvent, useState } from "react";

const social = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "X", href: "https://x.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  function handleNewsletter(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-surface-raised/60 py-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg font-semibold text-white">Aura</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              Viagens premium com roteiros assistidos por IA e validação humana.
              Escritório em Poços de Caldas · atendimento global.
            </p>
            <ul className="mt-6 flex flex-wrap gap-4">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-400 underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Newsletter</p>
            <p className="mt-2 text-sm text-zinc-500">
              Destinos em ascensão e insights de curadoria, sem spam.
            </p>
            <form
              onSubmit={handleNewsletter}
              className="mt-4 flex flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-accent/30 focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-surface transition hover:bg-zinc-200"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lucas Maicon{" "}
            <span className="font-mono text-zinc-500">&lt;/&gt;</span>
          </p>
          <p className="text-zinc-500">
            Política de privacidade · Termos de uso
          </p>
        </div>
      </div>
    </footer>
  );
}
