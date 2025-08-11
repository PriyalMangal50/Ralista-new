import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import heroBg from "@/assets/ralista-2.jpeg";
import personalCareImg from "@/assets/products.png";
import aimg from "@/assets/a1.png"; // adjust the path as needed
import { useMemo, useState } from "react";
import { Search, ChevronUp, Leaf, ShieldCheck, Sparkles, Droplets } from "lucide-react";

// OTC product catalog
const otcProducts = [
  { name: "Heat Rub Massaging Cream", badge: "Relief", desc: "Warming analgesic blend that helps soothe muscular aches, stiffness, and post-workout soreness with a gentle glide texture." },
  { name: "Heel Balm", desc: "Deeply emollient balm that targets dryness and rough, cracked heels restoring supple softness." },
  { name: "Freeze Gel / Cooling Gel", badge: "Cooling", desc: "Fast-acting mentholated cooling gel delivering an instant icy sensation to relieve minor sprains and fatigue." },
  { name: "Arnica Cream", desc: "Botanical arnica extract supports recovery from minor bumps and bruises while calming localized discomfort." },
  { name: "Tattoo Moisturizing Cream", desc: "Light, breathable hydration formulated to support skin barrier and vibrancy during tattoo after‑care." },
  { name: "Foot Softening Lotion", desc: "Daily hydration for tired feet with urea + botanical oils to smooth calloused areas without greasiness." },
  { name: "Refreshing Foot Spray", badge: "Fresh", desc: "Deodorizing cooling micro-mist that instantly revives feet and neutralizes odor on-the-go." },
  { name: "Cracked Heel Cream", desc: "Targeted intensive repair complex with occlusives and ceramide boosters for severely dry heel fissures." },
  { name: "Tea Tree Cream", desc: "Multi-purpose tea tree infused cream offering purifying support for minor irritations and congestion areas." },
  { name: "Master Plast Oriental Rub", desc: "Traditional style aromatic balm combining herbal oils for comforting, warming relief of local tension." },
  { name: "Baby Teething Gel", badge: "Baby", desc: "Mild soothing gel to comfort gums during teething phases. Sugar-free and gentle for delicate mouths." },
  { name: "Aloe Vera Gel", badge: "Hydrate", desc: "Cooling, fast-absorbing aloe base to calm and rehydrate skin after sun or mild irritation." },
  { name: "Zinc Oxide Cream", desc: "Protective barrier cream that shields against moisture and friction — ideal for diaper and sensitive zones." },
  { name: "Aqueous Cream", desc: "Classic light emollient providing all-over hydration for dry, tight or irritated skin types." },
  { name: "Aqueous Cream Cocoa Butter", desc: "Enhanced with cocoa butter for richer, longer-lasting moisture and improved skin suppleness." },
  { name: "Aqueous Cream Aloe Vera", desc: "Infused with aloe to deliver soothing hydration while maintaining the simplicity of an aqueous base." },
  { name: "Aqueous Lotion", desc: "Featherweight daily body lotion absorbing quickly to leave skin comfortable and smooth." },
];

export default function Products4() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return otcProducts.filter(p => !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen">
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
                        Home &gt; Products &gt; OTC Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Intro */}
      <section className="py-14" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/3 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl mb-6 font-glancyr text-[#233362] leading-tight">Targeted Relief & Everyday Skin Support</h2>
            <p className="text-lg font-linear-grotesk text-[#233362] leading-relaxed mb-5">Our OTC range brings together functional topical formulations trusted across personal wellness, sports recovery, foot care, baby comfort, and general dermal protection. Crafted under stringent quality controls, each product focuses on efficacy, skin compatibility, and a clean sensorial profile.</p>
            <p className="text-lg font-linear-grotesk text-[#233362] leading-relaxed">From warming muscle rubs to cooling gels, from barrier creams to botanical soothers, the line empowers retailers, clinics, hospitality brands, and private-label partners to deliver consistent care outcomes.</p>
            <div className="mt-8 relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search OTC products..." className="w-full pl-11 pr-4 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-[#2333621f] text-sm text-[#233362] focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]" />
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="relative group max-w-sm ml-auto">
              <img src={personalCareImg} alt="OTC Collection" className="rounded-2xl shadow-lg w-full h-[360px] object-cover ring-1 ring-[#2333621f]" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#233362]/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* OTC Product Grid */}
      <section className="pb-8 pt-4" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-glancyr text-[#233362]">{query ? `Results (${filtered.length})` : 'All OTC Products'}</h3>
            <span className="text-xs tracking-wide text-[#23336299] uppercase">{filtered.length} items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 auto-rows-fr">
            {filtered.map(p => (
              <div key={p.name} className="group relative flex flex-col backdrop-blur-sm border border-[#23336212] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {p.badge && <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">{p.badge}</span>}
                <h4 className="text-lg font-semibold text-[#233362] mb-2 pr-10">{p.name}</h4>
                <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[400px] transition-all duration-500">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-[11px] text-[#23336280]">
                  <button className="opacity-0 group-hover:opacity-100 transition text-[#233362] hover:underline">Enquire →</button>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336233] transition" />
                <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent)] opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-14 text-[#233362]">No products found.</div>}
        </div>
      </section>

      {/* Value / Why Section */}
      <section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_15%_30%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mb-12">
            <p className="uppercase tracking-[0.3em] text-sm text-[#23336280] mb-4">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Why Our OTC Range Stands Out</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">Each formulation balances performance with skin friendliness, focusing on purposeful ingredient synergy rather than filler complexity. Built for reliability across retail shelves, clinical support channels, and custom private label programs.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-14">
            {[{ icon: <ShieldCheck className="w-7 h-7 text-[#233362]" />, title: "Quality Assured", text: "Manufactured under stringent QA & compliance." }, { icon: <Leaf className="w-7 h-7 text-[#233362]" />, title: "Thoughtful Bases", text: "Skin-centric carriers & purposeful actives." }, { icon: <Sparkles className="w-7 h-7 text-[#233362]" />, title: "Private Label", text: "Flexible OEM & custom packaging streams." }, { icon: <Droplets className="w-7 h-7 text-[#233362]" />, title: "Targeted Relief", text: "Focused solutions for common concerns." }].map(card => (
              <div key={card.title} className="p-6 backdrop-blur-sm rounded-2xl border border-[#23336212] shadow-sm hover:shadow-md transition group">
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
};
