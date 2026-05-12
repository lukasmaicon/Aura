import { motion } from "framer-motion";

const steps = [
  {
    title: "Entendemos o viajante",
    body: "Preferências, ritmo, orçamento e o que você valoriza — silêncio, arte, gastronomia ou adrenalina.",
  },
  {
    title: "Modelos cruzam milhões de combinações",
    body: "Rotas, conexões, hotéis boutique e janelas sazonais são ponderados em tempo real.",
  },
  {
    title: "Curadores refinam o resultado",
    body: "Humanos validam cada sugestão para garantir autenticidade e fluidez na experiência.",
  },
];

export function AISection() {
  return (
    <section
      id="ia-roteiros"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="ia-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/15 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="ia-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              IA de Roteiros: a mágica acontece entre dados e sensibilidade
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Não é uma lista genérica de pontos turísticos. Nossos modelos
              aprendem com viagens reais e feedback de especialistas para sugerir
              sequências que respeitam logística, clima e o seu jeito de viver
              cada destino.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-surface-raised to-surface p-8 shadow-2xl shadow-black/50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/30 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Preview ao vivo
            </p>
            <p className="mt-4 font-mono text-sm text-zinc-300">
              <span className="text-accent">→</span> Ajustando ritmo: &quot;mais
              manhãs livres&quot;
            </p>
            <p className="mt-2 font-mono text-sm text-zinc-500">
              <span className="text-zinc-600">—</span> Priorizando hotéis com
              spa e vista
            </p>
            <p className="mt-2 font-mono text-sm text-zinc-500">
              <span className="text-zinc-600">—</span> Inserindo experiência
              gastronômica local (quinta)
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-surface/80 p-4">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Confiança do modelo</span>
                <span className="text-accent">94%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-teal-300"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "94%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Indicador ilustrativo de alinhamento com o perfil declarado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
