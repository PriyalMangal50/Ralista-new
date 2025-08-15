import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import { useMemo, useState } from "react";
import { Search, Layers, Sparkles } from "lucide-react";

type Cat = "textiles";

interface Item {
  name: string;
  category: Cat;
  desc: string;
  badge?: string;
}

const items: Item[] = [
  { name: "Human Protection Wear", category: "textiles", badge: "PPE", desc: "Protective apparel tailored for industrial and field use." },
  { name: "Flame Retardant Apparel", category: "textiles", badge: "FR", desc: "Garments engineered to meet flame resistance requirements in demanding environments." },
  { name: "Work Wear", category: "textiles", badge: "Work", desc: "Durable uniforms and work apparel for manufacturing, logistics and services." },
  { name: "Special Protection Garments", category: "textiles", badge: "Special", desc: "Specialized clothing for chemical, particulate and task‑specific protection." },
  { name: "Extreme Cold Weather Clothing System", category: "textiles", badge: "ECW", desc: "Layered cold‑weather system optimizing thermal retention and moisture control." },
  { name: "Arc Suit", category: "textiles", badge: "Arc", desc: "Arc‑rated apparel designed for electrical safety standards." },
  { name: "Defense Uniforms", category: "textiles", badge: "Defense", desc: "Uniform solutions designed for defense specifications and rugged use." },
  { name: "High Visibility Clothing", category: "textiles", badge: "Hi‑Vis", desc: "High‑visibility garments for roadway, warehouse and construction safety." },
  { name: "Health Care Wear", category: "textiles", badge: "Health", desc: "Medical wear and scrub systems for clinics and hospitals." },
  { name: "Disposable Non‑Woven Textiles", category: "textiles", badge: "Disposable", desc: "Single‑use non‑woven items for hygiene and controlled environments." },
  { name: "Customized Vehicle Covers", category: "textiles", badge: "Covers", desc: "Tailored vehicle covers for protection from dust, UV and weather." },
  { name: "Customized Furniture Covers", category: "textiles", badge: "Covers", desc: "Protective covers fitted for furniture in storage and transit." },
  { name: "Socks cum Slippers", category: "textiles", badge: "Comfort", desc: "Hybrid socks‑slippers for indoor comfort and warmth." },
];

export default function Products17() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter(i => !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
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
                <p className="text-lg font-linear-grotesk text-gray-300">Home &gt; Products &gt; Textiles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Search */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Textiles</h2>
            <p className="text-lg text-[#233362] mb-6">Protection and utility apparel for industrial, defense and healthcare—with options for disposables and custom covers.</p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search textiles..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-transparent border border-[#23336233] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl font-glancyr text-[#233362] mb-2">All Textiles</h3>
              <p className="text-sm uppercase tracking-wide text-[#23336280]">{filtered.length} items</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
            {filtered.map((t) => (
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
          {filtered.length === 0 && <div className="text-center py-16 text-[#233362]">No products found.</div>}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_18%_32%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Protection, Comfort & Customization</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">From arc‑rated safety apparel to disposables and bespoke covers, our textile solutions balance protection, comfort and brand requirements.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[{ title: "Safety", text: "FR, arc‑rated and high‑visibility options for standards compliance." }, { title: "Durability", text: "Work wear built for daily use and easy upkeep." }, { title: "Versatility", text: "Defense, healthcare and industrial coverage." }, { title: "Private Label", text: "Custom patterns, sizes and branding available." }].map((card) => (
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
