import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { DestinationsGrid } from "./components/sections/DestinationsGrid";
import { AISection } from "./components/sections/AISection";


function App() {
  return (
    <div
      id="topo"
      className="min-h-dvh min-h-screen bg-[#0c0f14] text-zinc-100"
    >
      <Header />

      <main className="relative" id="conteudo">
        <Hero />
        <DestinationsGrid />
        <AISection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
