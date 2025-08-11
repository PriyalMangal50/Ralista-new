import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import toolImg from "@/assets/service-4.jpg";
import { useState, useMemo } from "react";
import { Search, Brush, Layers, Droplet, Package, Wrench, Sparkles } from "lucide-react";

// Data model
interface ToolItem {
  name: string;
  category: "sweeping" | "mopping" | "scrubbing" | "accessories" | "storage";
  desc: string;
  badge?: string;
}

const tools: ToolItem[] = [
  { name: "Lobby Dust Pan & Broom", category: "sweeping", badge: "Set", desc: "Angled lobby broom with ergonomic dust pan for quick spot collection in public & facility areas." },
  { name: "Brushes", category: "sweeping", desc: "Assorted utility brushes for floor edges, grout lines, equipment surfaces & general debris agitation." },
  { name: "Floor Wiper", category: "sweeping", desc: "Rubber-edged wiper removes excess wash water & slurry from smooth floor finishes efficiently." },
  { name: "Wringer Trolley", category: "mopping", badge: "Combo", desc: "Dual-chamber bucket with high‑efficiency down‑press wringer reduces cross‑contamination & moisture load." },
  { name: "Round Mopping System", category: "mopping", desc: "Circular microfiber head with 360° swivel plate for multi‑directional cleaning around fixtures." },
  { name: "Wet Mopping System", category: "mopping", desc: "Absorbent looped yarn / microfiber solution release platform for high soil load removal." },
  { name: "Dry Mopping System", category: "mopping", desc: "High dust capture microfiber frame for pre‑clean & particulate control in corridors & halls." },
  { name: "Damp Mopping System", category: "mopping", desc: "Light-moisture microfiber pad system optimized for daily film & light soil removal with fast drying." },
  { name: "Multi-Purpose Carry Basket", category: "storage", badge: "Caddy", desc: "Portable segmented caddy organizes chemicals, cloths, pads & hand tools for rapid deployment." },
  { name: "Window Washer & Squeegee", category: "accessories", desc: "Paired microfiber washer and precision squeegee channel for streak‑free glazing maintenance." },
  { name: "Stainless Steel Scrubber", category: "scrubbing", desc: "Tough coiled stainless mesh removes baked‐on residues from metal cookware & surfaces." },
  { name: "Green Scrub Pad", category: "scrubbing", desc: "Aggressive synthetic fiber pad for heavy-duty surface restoration & stubborn build‑up." },
  { name: "Sponge Pad", category: "scrubbing", desc: "Dual‑layer absorbent sponge with mild abrasive face for controlled cleaning of general surfaces." },
  { name: "Knitted Fabric Scourer", category: "scrubbing", desc: "Soft knitted polymer web for moderate soil removal without deep scratching." },
  { name: "Steel Knitted Fabric Scourer", category: "scrubbing", desc: "Reinforced knitted steel mesh for high-intensity scouring on durable cookware & grates." },
];

const filterGroups: { key: ToolItem["category"] | "all"; label: string; icon: JSX.Element }[] = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "sweeping", label: "Sweeping", icon: <Brush className="w-4 h-4" /> },
  { key: "mopping", label: "Mopping", icon: <Droplet className="w-4 h-4" /> },
  { key: "scrubbing", label: "Scrubbing", icon: <Layers className="w-4 h-4" /> },
  { key: "accessories", label: "Accessories", icon: <Wrench className="w-4 h-4" /> },
  { key: "storage", label: "Storage", icon: <Package className="w-4 h-4" /> },
];

export default function Products7() {
  const [active, setActive] = useState<typeof filterGroups[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return tools.filter(t => {
      const groupOk = active === "all" || t.category === active;
      const qOk = !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      return groupOk && qOk;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-[#F1F5EB]">
      <Header />
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
                  Home &gt; Products &gt; Cleaning Tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero */}
      
      
      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
          <div className="lg:w-7/12 w-full">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Integrated Tool Systems For Professional Upkeep</h2>
            <p className="text-lg text-[#233362] mb-5 leading-relaxed">Our curated toolkit spans debris collection, mopping methodologies, surface agitation and precision finishing accessories—engineered to streamline workflow cycles and elevate cleanliness outcomes across hospitality, healthcare, retail & industrial environments.</p>
            <p className="text-lg text-[#233362] leading-relaxed">Ergonomic designs, modular interchangeability and material durability reduce operator fatigue while supporting sustainable maintenance standards and faster turnaround.</p>
          </div>
          <div className="lg:w-5/12 w-full">
            <div className="relative max-w-md ml-auto h-[360px] rounded-2xl overflow-hidden border border-[#23336222] group">
              <img src={toolImg} alt="Cleaning Tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#233362]/55 via-[#23336233] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-glancyr text-2xl mb-2 drop-shadow">Purpose Built</p>
                <p className="text-xs text-white/80 leading-relaxed drop-shadow">Streamlined, modular & efficient tool architecture for professional upkeep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-[#F1F5EBcc]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filterGroups.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium relative transition focus:outline-none border ${active === f.key ? 'bg-[#233362] text-white shadow border-[#233362]' : 'bg-transparent text-[#233362] border-[#23336233] hover:bg-[#233362] hover:text-white'}`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search tools..." className="w-full pl-11 pr-4 py-3 rounded-full bg-transparent border border-[#23336233] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]" />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl font-glancyr text-[#233362] mb-2">{active === 'all' ? 'All Tools' : filterGroups.find(g => g.key === active)?.label + ' Tools'}</h3>
              <p className="text-sm uppercase tracking-wide text-[#23336280]">{filtered.length} items</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
            {filtered.map(t => (
              <div key={t.name} className="group relative flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-transparent border border-[#23336233]">
                {t.badge && <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">{t.badge}</span>}
                <h4 className="text-lg font-semibold text-[#233362] mb-2 leading-snug">{t.name}</h4>
                <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[300px] transition-all duration-500">{t.desc}</p>
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336240] transition" />
                <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_50%_30%,#2333620d,transparent_70%)]" />
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-16 text-[#233362]">No tools found.</div>}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_18%_32%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Performance, Ergonomics & Modular Efficiency</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">Engineered for balanced weight, optimized surface contact & material longevity—our cleaning tools accelerate hygiene cycles while lowering lifetime operating cost.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            {[
              { title: "Ergonomic", text: "Reduced strain + improved reach for operators." },
              { title: "Modular", text: "Interchangeable heads & frames cut redundancy." },
              { title: "Durable", text: "Material blends tested for commercial cycles." },
              { title: "Efficient", text: "Faster soil removal lowers chemical usage." },
              { title: "Private Label", text: "Custom color coding & branding options." },
            ].map(card => (
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
