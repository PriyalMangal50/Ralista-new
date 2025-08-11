import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import productImg from "@/assets/a1.png"; // placeholder
import { useMemo, useState } from "react";
import { Search, Droplets, Sparkles, ShieldCheck, Recycle, Filter as FilterIcon } from "lucide-react";

// Data
interface CleaningProduct {
  name: string;
  type: "tablet" | "liquid" | "powder" | "gel" | "granules" | "booster";
  badge?: string;
  desc: string;
}

const cleaningProducts: CleaningProduct[] = [
  { name: "Dish Washer & Dish Cleaning Tablet", type: "tablet", badge: "Tablet", desc: "Effervescent enzyme + oxygen action for sparkling dishes & cutlery." },
  { name: "Washing Machine Drum Cleaning Tablet", type: "tablet", badge: "Tablet", desc: "Deep cleans residue, bio‑film & odor from inner drum components." },
  { name: "Denture Cleaning Tablet", type: "tablet", badge: "Gentle", desc: "Effervescent antibacterial soak for hygienic, stain‑lift denture care." },
  { name: "Borax Laundry Booster & Multipurpose Cleaner", type: "booster", badge: "Booster", desc: "Alkaline mineral booster enhances detergent performance & deodorizes." },
  { name: "Bleach Tablet", type: "tablet", badge: "Chlorine", desc: "Controlled‑dose stabilized tablet for whitening & sanitation tasks." },
  { name: "Coffee Machine Cleaning Tablet", type: "tablet", badge: "Descaler", desc: "Removes coffee oils & residue for optimal flavor extraction." },
  { name: "Oxalic Acid", type: "powder", badge: "Powder", desc: "Powerful organic acid tackling rust, tannin & mineral stains on hard surfaces." },
  { name: "Rust Remover Jelly", type: "gel", badge: "Targeted", desc: "Thixotropic gel clings to vertical metals dissolving oxide build‑up." },
  { name: "Drain Blockage Remover Granules", type: "granules", badge: "Action", desc: "Heat‑releasing granules break grease, hair & organic drain obstructions." },
  { name: "Bathroom / Toilet Liquid Cleaner", type: "liquid", badge: "Hygiene", desc: "Multi‑acid & surfactant system for limescale, soap scum & germ removal." },
  { name: "Dish Wash Liquid Cleaner", type: "liquid", badge: "Grease Cut", desc: "High-foam surfactant blend rapidly lifts oils & food residue; skin‑mild." },
];

const typeFilters: { key: CleaningProduct["type"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "tablet", label: "Tablets" },
  { key: "liquid", label: "Liquids" },
  { key: "powder", label: "Powders" },
  { key: "gel", label: "Gels" },
  { key: "granules", label: "Granules" },
  { key: "booster", label: "Boosters" },
];

export default function Products6() {
  const [activeType, setActiveType] = useState<typeof typeFilters[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return cleaningProducts.filter(p => {
      const typeOk = activeType === "all" || p.type === activeType;
      const qOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return typeOk && qOk;
    });
  }, [activeType, query]);

  return (
    <div className="min-h-screen bg-[#F1F5EB]">
      <Header />

      {/* Hero */}

      <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4 py-8">
          <div 
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroBg})`}}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">
                  Products
                </h1>
                <p className="text-lg font-linear-grotesk text-gray-300">
                  Home &gt; Products &gt; Cleaning Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Precision Formulas For Hygiene & Performance</h2>
            <p className="text-lg text-[#233362] mb-5 leading-relaxed">From dish care to appliance descaling, fabric refresh to drain rescue—our portfolio spans high‑efficacy tablets, liquids, gels, boosters & specialty agents engineered for measurable results.</p>
            <p className="text-lg text-[#233362] leading-relaxed">Optimized actives, controlled release systems and user‑friendly formats reduce waste, save time and elevate operational cleanliness across home, hospitality & institutional channels.</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative group max-w-xl ml-auto">
              <img src={productImg} alt="Cleaning Solutions" className="rounded-2xl shadow-lg w-full h-[420px] object-cover ring-1 ring-[#2333621f]" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#233362]/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:to-[#C6FF4D22] opacity-0 group-hover:opacity-100 blur-sm transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-[#F1F5EBcc]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {typeFilters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveType(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium relative transition focus:outline-none border ${activeType === f.key ? 'bg-[#233362] text-white shadow border-[#233362]' : 'bg-transparent text-[#233362] border-[#23336233] hover:bg-[#233362] hover:text-white'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." className="w-full pl-11 pr-4 py-3 rounded-full bg-transparent border border-[#23336233] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl font-glancyr text-[#233362] mb-2">{activeType === 'all' ? 'All Cleaning Products' : typeFilters.find(t => t.key === activeType)?.label + ' Range'}</h3>
              <p className="text-sm uppercase tracking-wide text-[#23336280]">{filtered.length} items</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
            {filtered.map(p => (
              <div key={p.name} className="group relative flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-transparent border border-[#23336233]">
                {p.badge && <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">{p.badge}</span>}
                <h4 className="text-lg font-semibold text-[#233362] mb-2 leading-snug">{p.name}</h4>
                <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[420px] transition-all duration-500">{p.desc}</p>
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336240] transition" />
                <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_35%_25%,#2333620d,transparent_70%)]" />
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-16 text-[#233362]">No products found.</div>}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_15%_30%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Optimized Chemistry, Practical Formats</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">High‑purity actives, controlled dissolution tablet matrices & surface‑safe blends deliver reliable cleanliness while supporting private label customization.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            {[
              { icon: <Sparkles className="w-7 h-7 text-[#233362]" />, title: "High Efficacy", text: "Optimized surfactant & enzyme systems." },
              { icon: <Droplets className="w-7 h-7 text-[#233362]" />, title: "Water Smart", text: "Low residue rinsing & dosing accuracy." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#233362]" />, title: "Quality Assured", text: "Consistent batch performance & safety." },
              { icon: <Recycle className="w-7 h-7 text-[#233362]" />, title: "Reduced Waste", text: "Concentrated formats minimize packaging." },
              { icon: <FilterIcon className="w-7 h-7 text-[#233362]" />, title: "Targeted Action", text: "Descaling, degreasing & sanitizing focus." },
            ].map(card => (
              <div key={card.title} className="p-6 rounded-2xl border border-[#23336233] shadow-sm hover:shadow-md transition group bg-transparent">
                <div className="mb-4">{card.icon}</div>
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
