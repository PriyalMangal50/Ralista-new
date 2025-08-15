import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import { useMemo, useState } from "react";
import { Search, Package, Boxes, Layers, FileText, Leaf, ShoppingBag } from "lucide-react";

// Categories for Packaging
// Subheadings: Plastic, Aluminum Foil Products, Paper Products, Compostable Products, Paper Bags

type Cat = "plastic" | "foil" | "paper" | "compostable" | "paperbags";

interface Item {
  name: string;
  category: Cat;
  desc: string;
  badge?: string;
}

const items: Item[] = [
  // Plastic
  { name: "Food Containers", category: "plastic", badge: "Plastic", desc: "Reusable, stackable plastic containers for fresh storage and meal prep." },
  { name: "Bowls", category: "plastic", badge: "Plastic", desc: "Durable serving and takeaway bowls with secure lid compatibility." },
  { name: "Trays", category: "plastic", badge: "Plastic", desc: "Lightweight trays for packaging displays and quick‑serve counters." },
  { name: "Cups", category: "plastic", badge: "Plastic", desc: "Cold and hot beverage cups with optional lids and straws." },
  { name: "Spoons & Forks", category: "plastic", badge: "Cutlery", desc: "Single‑use and reusable cutlery options for dine‑in and takeaway." },

  // Aluminum Foil Products
  { name: "Foil Containers", category: "foil", badge: "Foil", desc: "Oven‑ready aluminum containers ideal for bakes, roasts and deliveries." },
  { name: "Foil Rolls", category: "foil", badge: "Foil", desc: "Food‑grade aluminum rolls for cooking, wrapping and heat retention." },
  { name: "Foil Pop‑Up Sheets", category: "foil", badge: "Foil", desc: "Pre‑cut sheets for speed and consistency at prep stations." },

  // Paper Products
  { name: "Food Containers", category: "paper", badge: "Paper", desc: "Paper bowls and boxes with grease‑resistant liners for hot and cold foods." },
  { name: "Bowls", category: "paper", badge: "Paper", desc: "Compost‑aware paper bowls; branding options available." },
  { name: "Trays", category: "paper", badge: "Paper", desc: "Paperboard trays for snacks, fries and serving flights." },
  { name: "Cups", category: "paper", badge: "Paper", desc: "Single‑wall and double‑wall cups with lids and sleeves." },
  { name: "Spoons & Forks", category: "paper", badge: "Wood/CPLA", desc: "Sustainable cutlery alternatives aligned with paper serviceware." },

  // Compostable Products
  { name: "Shopping Bags", category: "compostable", badge: "Compostable", desc: "Plant‑based carry bags designed to break down under compost conditions." },
  { name: "Garbage Bags", category: "compostable", badge: "Compostable", desc: "Bio‑derived liners for waste collection; tear‑resistant with leak guard." },
  { name: "Films", category: "compostable", badge: "Compostable", desc: "Compostable films for wrapping and produce—clarity with reduced footprint." },

  // Paper Bags
  { name: "All Types for Different Applications", category: "paperbags", badge: "Bags", desc: "Gusseted, flat, SOS and handle bags tailored for retail and food service." },
  { name: "Skin Care / Rigid Cosmetic Packaging", category: "paperbags", badge: "Cosmetic", desc: "Premium rigid cartons and sleeves for skincare and cosmetics." },
  { name: "POS Thermal Paper Rolls", category: "paperbags", badge: "POS", desc: "Reliable thermal rolls for POS systems; multiple widths and core sizes." },
];

const catMeta: Record<Cat, { title: string; icon: JSX.Element; anchor: string } > = {
  plastic: { title: "Plastic", icon: <Boxes className="w-4 h-4" />, anchor: "plastic" },
  foil: { title: "Aluminum Foil Products", icon: <Layers className="w-4 h-4" />, anchor: "aluminum-foil" },
  paper: { title: "Paper Products", icon: <FileText className="w-4 h-4" />, anchor: "paper-products" },
  compostable: { title: "Compostable Products", icon: <Leaf className="w-4 h-4" />, anchor: "compostable" },
  paperbags: { title: "Paper Bags", icon: <ShoppingBag className="w-4 h-4" />, anchor: "paper-bags" },
};

export default function Products14() {
  const [query, setQuery] = useState("");

  const filteredByCat = useMemo(() => {
    const q = query.toLowerCase();
    const f = (c: Cat) => items.filter(i => i.category === c && (!q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)));
    return {
      plastic: f("plastic"),
      foil: f("foil"),
      paper: f("paper"),
      compostable: f("compostable"),
      paperbags: f("paperbags"),
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
                <p className="text-lg font-linear-grotesk text-gray-300">Home &gt; Products &gt; Packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Search */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Packaging</h2>
            <p className="text-lg text-[#233362] mb-6">Comprehensive food and retail packaging—from plastic and paper to aluminum foil and compostable options—covering prep, serve and carry needs.</p>
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
              placeholder="Search packaging..."
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
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Food‑Safe, Brandable & Operationally Efficient</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">A wide material spectrum lets you optimize cost, sustainability and food safety—supported by consistent sizing and private‑label print options.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            {[{ title: "Compliance", text: "Food‑contact suitable materials and processes." }, { title: "Range", text: "Plastic, paper, foil and compostable options." }, { title: "Operations", text: "Stackable, standard sizes; fast line throughput." }, { title: "Sustainability", text: "Compostable and reduced‑impact alternatives." }, { title: "Private Label", text: "Custom prints, colors and set builds." }].map((card) => (
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
