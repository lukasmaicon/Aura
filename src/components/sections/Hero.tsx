import { FormEvent, useState } from "react";

export function Hero() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("2 adultos");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section
      id="busca"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid-size opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Roteiros guiados por IA
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
        >
          Onde a sua jornada se torna única{" "}
          <span className="bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent">
            através da inteligência
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Defina o seu próximo destino para começarmos o planejamento.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-4xl rounded-2xl border border-white/10 bg-surface-raised/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            <label className="flex flex-col gap-2 lg:col-span-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Destino ou região
              </span>
              <input
                type="text"
                name="destination"
                placeholder="Ex.: Japão na primavera, costa amalfitana…"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-accent/40 transition focus:border-accent/50 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Período
              </span>
              <input
                type="text"
                name="dates"
                placeholder="Datas flexíveis ou fixas"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none ring-accent/40 transition focus:border-accent/50 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Viajantes
              </span>
              <select
                name="travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none ring-accent/40 transition focus:border-accent/50 focus:ring-2"
              >
                <option>1 adulto</option>
                <option>2 adultos</option>
                <option>Família (2 adultos + criança)</option>
                <option>Grupo privado</option>
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-500">
              Em segundos, nossa IA cruza voos, hotéis boutique e experiências
              locais — você recebe até 3 propostas alinhadas ao seu estilo.
            </p>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/20 transition hover:bg-accent-muted"
            >
              Gerar roteiro
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
