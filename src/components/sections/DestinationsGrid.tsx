import { motion } from "framer-motion";
import { destinations } from "../../data/destinations";

const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DestinationsGrid() {
  return (
    <section
      id="destinos"
      className="border-t border-white/5 bg-surface-raised/40 py-20 sm:py-24"
      aria-labelledby="destinos-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="destinos-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Destinos em destaque
          </h2>
          <p className="mt-4 text-zinc-400">
            Cada card é um ponto de partida: do orçamento à duração, cada roteiro
            nasce do que é essencial para você.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, index) => (
            <li key={d.id}>
              <motion.article
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-lg shadow-black/30"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ willChange: "transform" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={d.imageUrl}
                    alt={`${d.name}, ${d.country}`}
                    className="h-full w-full object-cover"
                    variants={imageVariants}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {d.country}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{d.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 px-5 py-4">
                  <span className="text-xs text-zinc-500">
                    O seu próximo roteiro
                  </span>
                  <span className="text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
                    Detalhes →
                  </span>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
