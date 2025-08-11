import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import productImg from "@/assets/a1.png"; // placeholder image
import { useMemo, useState } from "react";
import { Search, Heart, Flame, Sparkles, Waves, Droplets } from "lucide-react";

// Brand palette constants
const BRAND = "#233362";
const LIGHT = "#F1F5EB";
const NEON = "#C6FF4D"; // accent

interface LubeProduct {
  name: string;
  type: "classic" | "stimulating" | "flavored";
  flavor?: string;
  badge?: string;
  desc: string;
}

const lubeProducts: LubeProduct[] = [
  {
    name: "Orgasm Gel",
    type: "stimulating",
    badge: "Stimulating",
    desc: "Pleasure-intensifying topical gel designed to heighten sensitivity & increase localized warmth / blood flow.",
  },
  {
    name: "Lubricating Jelly",
    type: "classic",
    badge: "Classic",
    desc: "Water‑based, pH balanced medical style jelly offering long‑lasting glide that rinses clean with no sticky residue.",
  },
  {
    name: "Tingle Lubricant",
    type: "stimulating",
    badge: "Tingle",
    desc: "Cooling / tingling sensation profile delivering playful contrast and enhanced sensory perception during intimacy.",
  },
  {
    name: "Original Stimulating Lubricant",
    type: "stimulating",
    desc: "Signature balanced warm-cool actives for nuanced stimulation while maintaining skin comfort and latex compatibility.",
  },
  {
    name: "Cherry Lubricant",
    type: "flavored",
    flavor: "Cherry",
    badge: "Flavored",
    desc: "Juicy cherry flavor & light natural aroma with a smooth water base ideal for oral and all-purpose intimacy support.",
  },
  {
    name: "Strawberry Lubricant",
    type: "flavored",
    flavor: "Strawberry",
    badge: "Flavored",
    desc: "Bright strawberry taste in a kissable, non‑staining formula that remains silky without added sugars or oils.",
  },
];

const typeFilters: { key: LubeProduct["type"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "classic", label: "Classic" },
  { key: "stimulating", label: "Stimulating" },
  { key: "flavored", label: "Flavored" },
];

export default function Products5() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<typeof typeFilters[number]["key"]>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return lubeProducts.filter(p => {
      const matchesType = activeType === "all" || p.type === activeType;
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (p.flavor?.toLowerCase().includes(q));
      return matchesType && matchesQuery;
    });
  }, [query, activeType]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: LIGHT }}>
      <Header />

      {/* Hero (pattern like Products1) */}
     
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
                        Home &gt; Products &gt; Lubes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Intro + Image */}
      <section className="py-14">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-14">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">
              Comfort, Confidence & Creative Sensations
            </h2>
            <p className="text-lg text-[#233362] mb-5 leading-relaxed">
              Our water‑based lubricant & stimulation range is crafted for inclusive, body‑safe performance. Thoughtfully balanced viscosity, skin‑friendly pH, and latex / device compatibility support natural intimacy while optional sensory profiles (tingle, warmth, flavor) elevate experience without irritation.
            </p>
            <p className="text-lg text-[#233362] leading-relaxed">
              Flavored variants remain kissable & sugar‑free. Stimulating gels use calibrated actives to amplify without overwhelming. All produced under strict QA for purity, consistency & private label flexibility.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative group max-w-xl ml-auto">
              <img
                src={productImg}
                alt="Lubes Range"
                className="rounded-2xl shadow-lg w-full h-[420px] object-cover ring-1 ring-[#2333621f]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#233362]/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:to-[#C6FF4D22] opacity-0 group-hover:opacity-100 blur-sm transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214]" style={{ backgroundColor: `${LIGHT}cc` }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {typeFilters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveType(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium relative transition focus:outline-none ${
                  activeType === f.key
                    ? 'bg-[#233362] text-white shadow'
                    : ' text-[#233362]'
                }`}
              >
                {f.label}
                {activeType === f.key && (
                  <span className="absolute inset-0 rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search lubes..."
              className="w-full pl-11 pr-4 py-3 rounded-full backdrop-blur-sm border border-[#2333621f] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-3xl font-glancyr text-[#233362] mb-2">
                {activeType === 'all' ? 'All Lubricants & Gels' : typeFilters.find(t => t.key === activeType)?.label + ' Selection'}
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#23336280]">{filtered.length} items</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
            {filtered.map(p => (
              <div
                key={p.name}
                className="group relative flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-sm border border-[#23336214]"
              >
                {p.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">
                    {p.badge}
                  </span>
                )}
                <h4 className="text-lg font-semibold text-[#233362] mb-2 pr-10 leading-snug">
                  {p.name}
                </h4>
                {p.flavor && (
                  <div className="text-[11px] uppercase tracking-wide text-[#23336299] mb-2">
                    Flavor: <span className="text-[#233362] font-medium">{p.flavor}</span>
                  </div>
                )}
                <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[420px] transition-all duration-500">
                  {p.desc}
                </p>
                
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336233] transition" />
                <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent)] opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#233362]">No products found.</div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_15%_30%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.35em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">
              Engineered For Feel, Safety & Versatility
            </h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">
              We focus on sensory precision, purity, and private label flexibility. Each variant balances glide longevity with easy clean‑off, avoiding heavy tack or artificial after‑feel.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            { [
              { icon: <Droplets className="w-7 h-7 text-[#233362]" />, title: "Water Based", text: "Latex & device compatible; residue‑light finish." },
              { icon: <Waves className="w-7 h-7 text-[#233362]" />, title: "Balanced pH", text: "Gentle for intimate / external skin zones." },
              { icon: <Flame className="w-7 h-7 text-[#233362]" />, title: "Sensory Tech", text: "Controlled warm / cool / tingle activations." },
              { icon: <Heart className="w-7 h-7 text-[#233362]" />, title: "Body Safe", text: "Strict QA & clean, irritation‑aware inputs." },
              { icon: <Sparkles className="w-7 h-7 text-[#233362]" />, title: "Private Label", text: "Custom flavor, actives & packaging flows." },
            ].map(card => (
              <div
                key={card.title}
                className="p-6 backdrop-blur-sm rounded-2xl border border-[#23336212] shadow-sm hover:shadow-md transition group"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-semibold text-[#233362] mb-1">{card.title}</h3>
                <p className="text-sm text-[#233362]/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
