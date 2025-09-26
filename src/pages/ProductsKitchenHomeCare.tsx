import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import thermoImg from "@/assets/service-2.jpg";
import prepImg from "@/assets/service-3.jpg";
import containerImg from "@/assets/service-4.jpg";
import bathImg from "@/assets/service-2.jpg";
import { useMemo, useState } from "react";
import {
  Search,
  Thermometer,
  Droplet,
  FlaskConical,
  Layers,
  Package,
  Sparkles,
  ChefHat,
  Ruler,
  Scissors,
  UtensilsCrossed,
  Gauge,
  SquareStack,
  Sandwich,
  Baby,
  Boxes,
  CupSoda,
  Square,
  Bath,
  Box,
  ShowerHead,
} from "lucide-react";

// --- Data from Products9.tsx ---
const thermoItems = [
  { name: "Insulated Water Bottles", category: "bottles", badge: "Insulated", desc: "Vacuumsealed double wall bottles for daylong temperature retention and condensationfree exterior." },
  { name: "Stainless Steel Water Bottle", category: "bottles", badge: "Steel", desc: "Durable stainless construction for everyday hydration; easyclean, tasteneutral interior." },
  { name: "Copper Water Bottle", category: "bottles", badge: "Copper", desc: "Elegant copper finish with foodsafe coating; classic style with robust build." },
  { name: "Casserole", category: "serveware", badge: "Hot/Cold", desc: "Insulated casserole retains heat/cold for extended serving windows; ideal for family meals." },
  { name: "Insulated Snack Pack", category: "storage", badge: "Lunch", desc: "Portable thermal snack/lunch carrier with spillresistant design for commute and school." },
  { name: "Insulated Water Jugs", category: "serveware", badge: "Jugs", desc: "Highcapacity jugs with ergonomic handle and pour spout for events and home use." },
  { name: "Steel Flask", category: "flasks", badge: "Flask", desc: "Compact travel flask with secure stopper and cuplid; superior retention on the go." },
  { name: "Pet Jars", category: "storage", badge: "Storage", desc: "Transparent PET jars with screw lids for pantry organization and dry goods." },
];
const thermoFilters = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "bottles", label: "Bottles", icon: <Droplet className="w-4 h-4" /> },
  { key: "flasks", label: "Flasks", icon: <FlaskConical className="w-4 h-4" /> },
  { key: "serveware", label: "Serveware", icon: <Layers className="w-4 h-4" /> },
  { key: "storage", label: "Storage", icon: <Package className="w-4 h-4" /> },
];

// --- Data from Products10.tsx ---
const prepItems = [
  { name: "Chopping Board", category: "boards", badge: "Cutting", desc: "Nonslip chopping board with juice groove; knifefriendly surface for clean prep." },
  { name: "Strainer", category: "strainers", badge: "Drain", desc: "Fine mesh strainer for rinsing grains, washing produce and draining pasta." },
  { name: "Mixing Bowl", category: "bowls", badge: "Mix", desc: "Deepwall mixing bowl with stable base; ideal for batters, salads and marinades." },
  { name: "Colander", category: "strainers", badge: "Rinse", desc: "Rigid colander with ergonomic handles; fast drainthrough for pasta and vegetables." },
  { name: "Measuring Jug", category: "measuring", badge: "Jug", desc: "Clear measuring jug with embossed graduations for accurate wet measures." },
  { name: "Measuring Cups & Spoons", category: "measuring", badge: "Set", desc: "Stackable cups and spoons with easyread markings for precise dry measures." },
  { name: "Scoop", category: "tools", badge: "Scoop", desc: "Multipurpose scoop for flours, grains and bulk ingredients; flat rest to avoid mess." },
  { name: "Kitchen Tools", category: "tools", badge: "Tools", desc: "Essential hand tools like peelers, tongs and whisks for daytoday prep." },
  { name: "Spatula & Spreader Set", category: "tools", badge: "Spatula", desc: "Heatresistant spatulas and spreaders for mixing, scraping and icing." },
  { name: "Citrus Squeezer & Grater", category: "tools", badge: "Zest", desc: "Hand squeezer and micrograter combo for fresh juice, zest and garnish." },
  { name: "Funnel Set", category: "tools", badge: "Funnel", desc: "Nested funnels in multiple diameters for spillfree transfers of liquids and dry goods." },
  { name: "Perfect Prep Set", category: "sets", badge: "Bundle", desc: "Coordinated set covering core prep tasksideal starter or upgrade kit for efficient kitchens." },
];
const prepFilters = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "boards", label: "Boards", icon: <Scissors className="w-4 h-4 rotate-90" /> },
  { key: "strainers", label: "Strainers", icon: <Layers className="w-4 h-4" /> },
  { key: "bowls", label: "Bowls", icon: <ChefHat className="w-4 h-4" /> },
  { key: "measuring", label: "Measuring", icon: <Gauge className="w-4 h-4" /> },
  { key: "tools", label: "Tools", icon: <UtensilsCrossed className="w-4 h-4" /> },
  { key: "sets", label: "Sets", icon: <Sparkles className="w-4 h-4" /> },
];

// --- Data from Products11.tsx ---
const mealItems = [
  { name: "Salt & Pepper Shakers", category: "meal", badge: "Dining", desc: "Table shakers with easyfill tops and controlled pour for everyday dining and service." },
  { name: "Tableware", category: "meal", badge: "Serve", desc: "Durable tableware range designed for daily meals, cafeterias and HORECA layouts." },
  { name: "Butter Dish", category: "meal", badge: "Serve", desc: "Covered butter dish keeps portions fresh; clean, easylift lid design." },
  { name: "Jelly Mould", category: "meal", badge: "Mould", desc: "Flexible mould forms for desserts and savoury gels; quick release and easy clean." },
  { name: "Ice Cube Tray", category: "meal", badge: "Freeze", desc: "Stackable ice trays with stable frames for spillfree filling and release." },
  { name: "Fast Food Tray", category: "meal", badge: "Tray", desc: "Nonslip cafeteria traylightweight, durable and easy to sanitize." },
  { name: "Bottle", category: "meal", badge: "Hydration", desc: "Everyday reusable bottle with secure cap; ideal for home, school and travel." },
  { name: "Riz Tableware Range", category: "meal", badge: "Range", desc: "Coordinated tableware collection balancing durability with clean aesthetics." },
  { name: "Kids Tableware", category: "kids", badge: "Kids", desc: "Childfriendly plates, bowls and cupssafe materials, playful colorways." },
  { name: "Kids Containers", category: "kids", badge: "Lunch", desc: "Leakresistant snack and lunch containers sized for school bags." },
  { name: "Quartz Organiser", category: "organiser", badge: "Desk", desc: "Modular organiser for desks and counterssections for stationery and accessories." },
  { name: "Secure Storage Boxes", category: "organiser", badge: "Storage", desc: "Stackable boxes with cliplocks; dustguard design for wardrobes and shelves." },
  { name: "Other Organisers", category: "organiser", badge: "Home", desc: "Utility organisers for kitchen, bath and closetsdeclutter with ease." },
  { name: "Kids Hangers", category: "hangers", badge: "Kids", desc: "Sized for childrens clothing; gentle shoulders protect garment shape." },
  { name: "Adult Hangers", category: "hangers", badge: "Wardrobe", desc: "Sturdy hangers with antislip features for shirts, dresses and outerwear." },
];
const mealCatMeta = {
  meal: { title: "Meal Time", icon: <UtensilsCrossed className="w-4 h-4" />, anchor: "meal-time" },
  kids: { title: "Kids", icon: <Baby className="w-4 h-4" />, anchor: "kids" },
  organiser: { title: "Organiser", icon: <Boxes className="w-4 h-4" />, anchor: "organiser" },
  hangers: { title: "Hangers", icon: <Package className="w-4 h-4" />, anchor: "hangers" },
};

// --- Data from Products12.tsx ---
const containerItems = [
  { name: "Krisper Container", category: "style", badge: "Style", desc: "Patterned storage container with tight lid fit; ideal for snacks and pantry staples." },
  { name: "Store Fresh Container", category: "airtight", badge: "Airtight", desc: "Keeps ingredients fresher for longer with gasketed, snaplock closure." },
  { name: "Lock & Safe Container", category: "airtight", badge: "Lock", desc: "Secure cliplock container with leakresistant seal for fridge and travel." },
  { name: "Bestow Boxes", category: "modular", badge: "Modular", desc: "Stackable gift/storage boxesneat organization for shelves and cupboards." },
  { name: "Frostee Container", category: "style", badge: "Freezer", desc: "Freezerfriendly container designed for lowtemp durability and easy release." },
  { name: "Polka Container", category: "style", badge: "Style", desc: "Playful design container that brightens pantry organization." },
  { name: "Prism Round Container", category: "modular", badge: "Round", desc: "Round container with nesting/stacking geometry for spaceefficient storage." },
  { name: "Prism Square Container", category: "modular", badge: "Square", desc: "Square footprint maximizes shelf space; modular sizes for easy stacking." },
  { name: "Food Saver Container", category: "airtight", badge: "Airtight", desc: "Keeps meals and leftovers fresh; microwavesafe base, secure lid closure." },
  { name: "Canister", category: "canisters", badge: "Canister", desc: "Countertop canister for tea, coffee, sugar and dry goods; clear/opaque options." },
  { name: "Pearl Jar", category: "canisters", badge: "Jar", desc: "Elegant jar with smooth finish; suitable for spices and confectionery." },
  { name: "Twister Container", category: "style", badge: "Twist", desc: "Twistinspired design with reliable sealing lid for daily use." },
  { name: "TakeAway Container", category: "takeaway", badge: "ToGo", desc: "Lightweight containers for takeaway meals; stackable and easy to carry." },
  { name: "Smart Container", category: "airtight", badge: "Smart", desc: "Modern profile with tight seal; ideal for weekly meal prep and storage." },
  { name: "Other Storage Containers", category: "other", desc: "Assorted storage formats for specialized needs across home and office." },
];
const containerFilters = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "airtight", label: "Airtight", icon: <Package className="w-4 h-4" /> },
  { key: "modular", label: "Modular", icon: <Boxes className="w-4 h-4" /> },
  { key: "style", label: "Style", icon: <SquareStack className="w-4 h-4" /> },
  { key: "canisters", label: "Canisters & Jars", icon: <Package className="w-4 h-4" /> },
  { key: "takeaway", label: "TakeAway", icon: <Sandwich className="w-4 h-4" /> },
  { key: "other", label: "Other", icon: <Sparkles className="w-4 h-4" /> },
];

// --- Data from Products13.tsx ---
const bathItems = [
  { name: "Bucket", category: "bucket", badge: "Bucket", desc: "Heavyduty bath bucket with reinforced handle; tough and easy to clean." },
  { name: "Soap Dish", category: "soap", badge: "Soap", desc: "Drainage design reduces soggy soap; easyclean, compact footprint." },
  { name: "Mug", category: "mug", badge: "Mug", desc: "Multiuse bathroom mug with comfortable grip and durable body." },
  { name: "Bathroom Stool", category: "stool", badge: "Stool", desc: "Sturdy, antiskid bathroom stool with textured surface for safety." },
  { name: "Basin", category: "basin", badge: "Basin", desc: "Generalpurpose basin for washing and soaking; lightweight and durable." },
  { name: "Wash Tubs", category: "tub", badge: "Tub", desc: "Large capacity tubs for laundry, cleaning and bathing tasks." },
];
const bathFilters = [
  { key: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { key: "bucket", label: "Buckets", icon: <Box className="w-4 h-4" /> },
  { key: "soap", label: "Soap Dishes", icon: <Droplet className="w-4 h-4" /> },
  { key: "mug", label: "Mugs", icon: <CupSoda className="w-4 h-4" /> },
  { key: "stool", label: "Stools", icon: <Bath className="w-4 h-4 rotate-90" /> },
  { key: "basin", label: "Basins", icon: <Square className="w-4 h-4" /> },
  { key: "tub", label: "Wash Tubs", icon: <ShowerHead className="w-4 h-4" /> },
];

export default function ProductsKitchenHomeCare() {
  // State for each section
  const [thermoActive, setThermoActive] = useState("all");
  const [thermoQuery, setThermoQuery] = useState("");
  const [prepActive, setPrepActive] = useState("all");
  const [prepQuery, setPrepQuery] = useState("");
  const [containerActive, setContainerActive] = useState("all");
  const [containerQuery, setContainerQuery] = useState("");
  const [bathActive, setBathActive] = useState("all");
  const [bathQuery, setBathQuery] = useState("");

  // Filtered lists
  const thermoFiltered = useMemo(() => {
    const q = thermoQuery.toLowerCase();
    return thermoItems.filter((i) => {
      const catOk = thermoActive === "all" || i.category === thermoActive;
      const qOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [thermoActive, thermoQuery]);

  const prepFiltered = useMemo(() => {
    const q = prepQuery.toLowerCase();
    return prepItems.filter((i) => {
      const catOk = prepActive === "all" || i.category === prepActive;
      const qOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [prepActive, prepQuery]);

  const containerFiltered = useMemo(() => {
    const q = containerQuery.toLowerCase();
    return containerItems.filter((i) => {
      const catOk = containerActive === "all" || i.category === containerActive;
      const qOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [containerActive, containerQuery]);

  const bathFiltered = useMemo(() => {
    const q = bathQuery.toLowerCase();
    return bathItems.filter((i) => {
      const catOk = bathActive === "all" || i.category === bathActive;
      const qOk = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [bathActive, bathQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#fff" }}>
        <div className="container mx-auto px-4 py-8">
          <div
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">Kitchen and Home Care</h1>
                <p className="text-lg font-linear-grotesk text-gray-300">Home &gt; Products &gt; Kitchen and Home Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Thermo Wares Section */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Thermo Wares</h2>
          <p className="text-lg text-[#233362] mb-4">Temperatureretaining solutions for onthego and athome serving. Engineered for durability, hygiene and everyday convenience.</p>
        </div>
        <div className="lg:w-1/3">
          <img src={thermoImg} alt="Thermo Wares" className="rounded-xl shadow-lg w-full object-cover max-h-96" />
        </div>
      </section>
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {thermoFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setThermoActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  thermoActive === f.key
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
            <Search className="absolute left-3 top-3 text-[#233362] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Thermo Wares..."
              className="pl-10 pr-4 py-2 rounded-full border w-full text-[#233362] bg-white"
              value={thermoQuery}
              onChange={e => setThermoQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {thermoFiltered.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#23336222]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#233362]">{item.name}</span>
              {item.badge && <span className="ml-2 px-2 py-1 rounded-full bg-[#233362] text-white text-xs">{item.badge}</span>}
            </div>
            <div className="text-sm text-[#233362]">{item.desc}</div>
          </div>
        ))}
      </section>
      {/* Meal Prep Section */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Meal Preparation Sets</h2>
          <p className="text-lg text-[#233362] mb-4">Essential kitchen prep tools designed for efficiency and organizationideal for homes, catering and HORECA.</p>
        </div>
        <div className="lg:w-1/3">
          <img src={prepImg} alt="Meal Preparation Sets" className="rounded-xl shadow-lg w-full object-cover max-h-96" />
        </div>
      </section>
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {prepFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setPrepActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  prepActive === f.key
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
            <Search className="absolute left-3 top-3 text-[#233362] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Meal Prep..."
              className="pl-10 pr-4 py-2 rounded-full border w-full text-[#233362] bg-white"
              value={prepQuery}
              onChange={e => setPrepQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prepFiltered.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#23336222]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#233362]">{item.name}</span>
              {item.badge && <span className="ml-2 px-2 py-1 rounded-full bg-[#233362] text-white text-xs">{item.badge}</span>}
            </div>
            <div className="text-sm text-[#233362]">{item.desc}</div>
          </div>
        ))}
      </section>
      {/* Meal Time, Kids, Organisers & Hangers Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Meal Time, Kids, Organisers & Hangers</h2>
          <p className="text-lg text-[#233362] mb-6">A coordinated collection of dining aids, kidfriendly ware, tidy organisers and robust hangersdesigned for everyday homes and hospitality settings.</p>
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          {Object.entries(mealCatMeta).map(([c, meta]) => (
            <a key={c} href={`#${meta.anchor}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#23336233] text-[#233362] hover:bg-[#233362] hover:text-white transition">
              {meta.icon}
              <span className="text-sm font-medium">{meta.title}</span>
            </a>
          ))}
        </div>
        {Object.entries(mealCatMeta).map(([cat, meta]) => (
          <section key={cat} id={meta.anchor} className="mb-12">
            <h3 className="text-2xl font-glancyr text-[#233362] mb-2 flex items-center gap-2">{meta.icon}{meta.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mealItems.filter(i => i.category === cat).map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#23336222]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#233362]">{item.name}</span>
                    {item.badge && <span className="ml-2 px-2 py-1 rounded-full bg-[#233362] text-white text-xs">{item.badge}</span>}
                  </div>
                  <div className="text-sm text-[#233362]">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>
      {/* Containers Section */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Containers</h2>
          <p className="text-lg text-[#233362] mb-4">Reliable storage solutions spanning airtight meal prep, modular pantry systems and classic canister stylesbuilt for kitchens, offices and retail packs.</p>
        </div>
        <div className="lg:w-1/3">
          <img src={containerImg} alt="Containers" className="rounded-xl shadow-lg w-full object-cover max-h-96" />
        </div>
      </section>
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {containerFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setContainerActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  containerActive === f.key
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
            <Search className="absolute left-3 top-3 text-[#233362] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Containers..."
              className="pl-10 pr-4 py-2 rounded-full border w-full text-[#233362] bg-white"
              value={containerQuery}
              onChange={e => setContainerQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {containerFiltered.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#23336222]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#233362]">{item.name}</span>
              {item.badge && <span className="ml-2 px-2 py-1 rounded-full bg-[#233362] text-white text-xs">{item.badge}</span>}
            </div>
            <div className="text-sm text-[#233362]">{item.desc}</div>
          </div>
        ))}
      </section>
      {/* Bath Time Section */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">Bath Time</h2>
          <p className="text-lg text-[#233362] mb-4">Bath essentials built for durability, hygiene and safetyideal for homes, hostels and commercial use.</p>
        </div>
        <div className="lg:w-1/3">
          <img src={bathImg} alt="Bath Time" className="rounded-xl shadow-lg w-full object-cover max-h-96" />
        </div>
      </section>
      <section className="pb-4 pt-2 sticky top-0 z-30 backdrop-blur-md border-y border-[#23336214] bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {bathFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setBathActive(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  bathActive === f.key
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
            <Search className="absolute left-3 top-3 text-[#233362] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Bath Time..."
              className="pl-10 pr-4 py-2 rounded-full border w-full text-[#233362] bg-white"
              value={bathQuery}
              onChange={e => setBathQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bathFiltered.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#23336222]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#233362]">{item.name}</span>
              {item.badge && <span className="ml-2 px-2 py-1 rounded-full bg-[#233362] text-white text-xs">{item.badge}</span>}
            </div>
            <div className="text-sm text-[#233362]">{item.desc}</div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
