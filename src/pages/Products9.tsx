import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import sectionImg from "@/assets/service-2.jpg";
import { useMemo, useState } from "react";
import { Search, Thermometer, Droplet, FlaskConical, Layers, Package, Sparkles } from "lucide-react";

type TCat = "bottles" | "flasks" | "serveware" | "storage";

interface ThermoItem {
  name: string;
  category: TCat;
  desc: string;
  badge?: string;
}

const items: ThermoItem[] = [
  { name: "Insulated Water Bottles", category: "bottles", badge: "Insulated", desc: "Vacuum‑sealed double wall bottles for day‑long temperature retention and condensation‑free exterior." },
  { name: "Stainless Steel Water Bottle", category: "bottles", badge: "Steel", desc: "Durable stainless construction for everyday hydration; easy‑clean, taste‑neutral interior." },
  { name: "Copper Water Bottle", category: "bottles", badge: "Copper", desc: "Elegant copper finish with food‑safe coating; classic style with robust build." },
  { name: "Casserole", category: "serveware", badge: "Hot/Cold", desc: "Insulated casserole retains heat/cold for extended serving windows; ideal for family meals." },
  { name: "Insulated Snack Pack", category: "storage", badge: "Lunch", desc: "Portable thermal snack/lunch carrier with spill‑resistant design for commute and school." },
  { name: "Insulated Water Jugs", category: "serveware", badge: "Jugs", desc: "High‑capacity jugs with ergonomic handle and pour spout for events and home use." },
  { name: "Steel Flask", category: "flasks", badge: "Flask", desc: "Compact travel flask with secure stopper and cup‑lid; superior retention on the go." },
  { name: "Pet Jars", category: "storage", badge: "Storage", desc: "Transparent PET jars with screw lids for pantry organization and dry goods." },
];

const filters: { key: TCat | "all"; label: string; icon: JSX.Element }[] = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "bottles", label: "Bottles", icon: <Droplet className="w-4 h-4" /> },
  { key: "flasks", label: "Flasks", icon: <FlaskConical className="w-4 h-4" /> },
  { key: "serveware", label: "Serveware", icon: <Layers className="w-4 h-4" /> },
  { key: "storage", label: "Storage", icon: <Package className="w-4 h-4" /> },
];

export default function Products9() {
  const [active, setActive] = useState<typeof filters[number]["key"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((i) => {
      const catOk = active === "all" || i.category === active;
      const qOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [active, query]);

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
                <p className="text-lg font-linear-grotesk text-gray-300">Home &gt; Products &gt; Thermo Wares</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Thermo Wares</h2>
          <p className="text-lg text-[#233362] mb-4">
            Temperature‑retaining solutions for on‑the‑go and at‑home serving. Engineered for durability, hygiene and everyday convenience.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img src={sectionImg} alt="Thermo Wares" className="rounded-xl shadow-lg w-full object-cover max-h-96" />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-[#F1F5EBcc]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  active === f.key
                    ? "bg-[#233362] text-white shadow border-[#233362]"
                    : "bg-transparent text-[#233362] border-[#23336233] hover:bg-[#233362] hover:text-white"
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#23336280]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search thermo wares..."
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
              <h3 className="text-3xl font-glancyr text-[#233362] mb-2">
                {active === "all" ? "All Thermo Wares" : `${filters.find((g) => g.key === active)?.label}`}
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#23336280]">{filtered.length} items</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 auto-rows-fr">
            {filtered.map((t) => (
              <div
                key={t.name}
                className="group relative flex flex-col rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-transparent border border-[#23336233]"
              >
                {t.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">
                    {t.badge}
                  </span>
                )}
                <h4 className="text-lg font-semibold text-[#233362] mb-2 leading-snug">{t.name}</h4>
                <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[300px] transition-all duration-500">
                  {t.desc}
                </p>
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
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6 leading-tight">Temperature Control, Portability & Hygiene</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">Insulated construction, food‑grade contact surfaces and ergonomic handling make this range reliable for everyday and professional use.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[{ title: "Thermal Retention", text: "Vacuum and insulated designs retain temperatures longer." }, { title: "Durability", text: "Steel and reinforced structures withstand frequent handling." }, { title: "Ease of Use", text: "Ergonomic grips, pour spouts and wide mouths." }, { title: "Customizable", text: "Capacities, colors and branding for private label." }].map((card) => (
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
