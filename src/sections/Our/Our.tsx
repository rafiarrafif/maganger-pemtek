import { Megaphone, Code2 } from "lucide-react";

const Our = () => {
  return (
    
    <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
    Our Core Divisions
  </h1>

  <p className="mt-4 text-gray-500 text-base md:text-lg">
    Dua pilar utama penggerak inovasi BEM FATISDA
  </p>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="rounded-3xl border border-gray-200 p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="mb-8 text-gray-300">
            <Megaphone size={72} strokeWidth={1.2} />
          </div>

          <h2 className="text-4xl font-bold mb-2">Medkom</h2>
          <p className="italic text-gray-500 mb-6">
            "The Voice & The Vision"
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Megaphone size={16} />
            <span>Social Media & Branding</span>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="mb-8 text-gray-300">
            <Code2 size={72} strokeWidth={1.2} />
          </div>

          <h2 className="text-4xl font-bold mb-2">Pemtek</h2>
          <p className="italic text-gray-500 mb-6">
            "The Architects of Digital Ecosystem"
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Code2 size={16} />
            <span>Web & App Development</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Our;
