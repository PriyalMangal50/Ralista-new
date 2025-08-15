import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import { useMemo, useState } from "react";
import { Search, Leaf, Wrench, Layers, Package, Sparkles } from "lucide-react";

type Cat = "recyclable" | "engineering";

interface Item {
  name: string;
  category: Cat;
  desc: string;
  badge?: string;
}

const items: Item[] = [
  // Recyclable Products
  { name: "Roofing Sheets", category: "recyclable", badge: "Recyclable", desc: "Robust, weather‑resistant sheets suitable for sheds, kiosks and industrial roofing, designed with recyclability in mind." },
  { name: "Plastic Sheets – Superior alternative to Plywood / MDF / PVC / WPC", category: "recyclable", badge: "Plastic Sheets", desc: "Durable plastic sheet solution offering moisture resistance, reusability and reduced maintenance compared to traditional boards." },
  { name: "Shuttering Sheets", category: "recyclable", badge: "Formwork", desc: "High‑cycle reusable shuttering sheets for concrete formwork; minimal sticking and easy release." },
  { name: "Sustainable Hollow Construction Sheets / Formwork Sheets", category: "recyclable", badge: "Hollow", desc: "Lightweight, structurally efficient hollow sheets—reduce material use while maintaining stiffness for formwork." },
  { name: "Floor Tiles, Wall Tiles, and Benches", category: "recyclable", badge: "Infra", desc: "Recycled‑content architectural products enabling circular design across floors, walls and public seating." },

  // Engineering
  { name: "Precision Components / Machined Components", category: "engineering", badge: "CNC", desc: "Close‑tolerance machined parts across metals and engineering plastics for industrial assemblies." },
  { name: "SMC Components", category: "engineering", badge: "SMC", desc: "Sheet molding compound parts with balanced strength‑to‑weight and heat resistance." },
  { name: "Compression Molding", category: "engineering", badge: "Process", desc: "Compression molding capabilities for thermosets/thermoplastics—efficient cycle times and repeatability." },
  { name: "Injection Molding", category: "engineering", badge: "Process", desc: "High‑volume injection molding for precise plastic components with consistent finish." },
  { name: "Roto Molding", category: "engineering", badge: "Process", desc: "Rotational molding for large hollow items with uniform wall thickness and durability." },
  { name: "Pultrusion", category: "engineering", badge: "FRP", desc: "Continuous manufacturing of FRP profiles delivering corrosion resistance and high tensile properties." },
];

const catMeta: Record<Cat, { title: string; icon: JSX.Element; anchor: string } > = {
  recyclable: { title: "Recyclable Products", icon: <Leaf className="w-4 h-4" />, anchor: "recyclable-products" },
  engineering: { title: "Engineering", icon: <Wrench className="w-4 h-4" />, anchor: "engineering" },
};

export default function Products16() {
  const [query, setQuery] = useState("");

  const filteredByCat = useMemo(() => {
    const q = query.toLowerCase();
    const f = (c: Cat) => items.filter(i => i.category === c && (!q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)));
    return {
      recyclable: f("recyclable"),
      engineering: f("engineering"),
    };
  }, [query]);

  return (
    <div className="min-h-screen bg-[#F1F5EB]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F1F5EB" }}>
        <div className="container mx-auto px-4 py-8">
          <div
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">Products</h1>
                <p className="text-lg font-linear-grotesk text-gray-300">Home &gt; Products &gt; Recyclable & Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Search */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Recyclable Products & Engineering</h2>
            <p className="text-lg text-[#233362] mb-6">Sustainable construction materials and advanced component manufacturing—covering sheets, tiles, benches and multi‑process FRP/SMC/thermoplastics.</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {(Object.keys(catMeta) as Cat[]).map(c => (
              <a key={c} href={`#${catMeta[c].anchor}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#23336233] text-[#233362] hover:bg-[#233362] hover:text-white transition">
                {catMeta[c].icon}
                <span className="text-sm font-medium">{catMeta[c].title}</span>
              </a>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-transparent border border-[#23336233] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]"
            />
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {(Object.keys(catMeta) as Cat[]).map((c) => {
        const sectionItems = filteredByCat[c];
        return (
          <section key={c} id={catMeta[c].anchor} className="py-10">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-2 mb-6">
                {catMeta[c].icon}
                <h3 className="text-3xl font-glancyr text-[#233362]">{catMeta[c].title}</h3>
                <span className="text-xs uppercase tracking-wide text-[#23336280] ml-2">{sectionItems.length} items</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
                {sectionItems.map((t) => (
                  <div key={t.name} className="group relative flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-transparent border border-[#23336233]">
                    {t.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">{t.badge}</span>
                    )}
                    <h4 className="text-lg font-semibold text-[#233362] mb-2 leading-snug">{t.name}</h4>
                    <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[300px] transition-all duration-500">{t.desc}</p>
                    <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336240] transition" />
                    <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_50%_30%,#2333620d,transparent_70%)]" />
                  </div>
                ))}
              </div>
              {sectionItems.length === 0 && (
                <div className="text-[#233362] py-8">No items match your search in this section.</div>
              )}
            </div>
          </section>
        );
      })}

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_18%_32%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Circular Materials & Precision Processes</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">From recyclable construction sheets to multi‑discipline molding and machining, our solutions balance sustainability with performance and cost.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[{ title: "Sustainability", text: "Recycled/recyclable product lines enable circular projects." }, { title: "Precision", text: "CNC and molding processes hold tight tolerances." }, { title: "Durability", text: "Material systems engineered for environmental loads." }, { title: "Private Label", text: "Specs, finishes and branding to your program." }].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border border-[#23336233] shadow-sm hover:shadow-md transition group bg-transparent">
                <h3 className="font-semibold text-[#233362] mb-1">{card.title}</h3>
                <p className="text-sm text-[#233362]/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
