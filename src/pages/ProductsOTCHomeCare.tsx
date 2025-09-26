import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import personalCareImg from "@/assets/products.png";
import aimg from "@/assets/a1.png";
import toolImg from "@/assets/service-4.jpg";
import sectionImg from "@/assets/service-1.jpg";
import { useMemo, useState } from "react";
import { Search, Sparkles, Droplets, Heart, Flame, Brush, Layers, Package, Wrench } from "lucide-react";

// --- OTC Products ---
const otcProducts = [
  { name: "Heat Rub Massaging Cream", badge: "Relief", desc: "Warming analgesic blend that helps soothe muscular aches, stiffness, and post-workout soreness with a gentle glide texture." },
  { name: "Heel Balm", desc: "Deeply emollient balm that targets dryness and rough, cracked heels restoring supple softness." },
  { name: "Freeze Gel / Cooling Gel", badge: "Cooling", desc: "Fast-acting mentholated cooling gel delivering an instant icy sensation to relieve minor sprains and fatigue." },
  { name: "Arnica Cream", desc: "Botanical arnica extract supports recovery from minor bumps and bruises while calming localized discomfort." },
  { name: "Tattoo Moisturizing Cream", desc: "Light, breathable hydration formulated to support skin barrier and vibrancy during tattoo after-care." },
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

// --- Lubes ---
const lubeProducts = [
  { name: "Orgasm Gel", badge: "Stimulating", desc: "Pleasure-intensifying topical gel designed to heighten sensitivity & increase localized warmth / blood flow." },
  { name: "Lubricating Jelly", badge: "Classic", desc: "Water-based, pH balanced medical style jelly offering long-lasting glide that rinses clean with no sticky residue." },
  { name: "Tingle Lubricant", badge: "Tingle", desc: "Cooling / tingling sensation profile delivering playful contrast and enhanced sensory perception during intimacy." },
  { name: "Original Stimulating Lubricant", desc: "Signature balanced warm-cool actives for nuanced stimulation while maintaining skin comfort and latex compatibility." },
  { name: "Cherry Lubricant", badge: "Flavored", desc: "Juicy cherry flavor & light natural aroma with a smooth water base ideal for oral and all-purpose intimacy support." },
  { name: "Strawberry Lubricant", badge: "Flavored", desc: "Bright strawberry taste in a kissable, non-staining formula that remains silky without added sugars or oils." },
];

// --- Cleaning Solutions ---
const cleaningProducts = [
  { name: "Dish Washer & Dish Cleaning Tablet", badge: "Tablet", desc: "Effervescent enzyme + oxygen action for sparkling dishes & cutlery." },
  { name: "Washing Machine Drum Cleaning Tablet", badge: "Tablet", desc: "Deep cleans residue, bio-film & odor from inner drum components." },
  { name: "Denture Cleaning Tablet", badge: "Gentle", desc: "Effervescent antibacterial soak for hygienic, stain-lift denture care." },
  { name: "Borax Laundry Booster & Multipurpose Cleaner", badge: "Booster", desc: "Alkaline mineral booster enhances detergent performance & deodorizes." },
  { name: "Bleach Tablet", badge: "Chlorine", desc: "Controlled-dose stabilized tablet for whitening & sanitation tasks." },
  { name: "Coffee Machine Cleaning Tablet", badge: "Descaler", desc: "Removes coffee oils & residue for optimal flavor extraction." },
  { name: "Oxalic Acid", badge: "Powder", desc: "Powerful organic acid tackling rust, tannin & mineral stains on hard surfaces." },
  { name: "Rust Remover Jelly", badge: "Targeted", desc: "Thixotropic gel clings to vertical metals dissolving oxide build-up." },
  { name: "Drain Blockage Remover Granules", badge: "Action", desc: "Heat-releasing granules break grease, hair & organic drain obstructions." },
  { name: "Bathroom / Toilet Liquid Cleaner", badge: "Hygiene", desc: "Multi-acid & surfactant system for limescale, soap scum & germ removal." },
  { name: "Dish Wash Liquid Cleaner", badge: "Grease Cut", desc: "High-foam surfactant blend rapidly lifts oils & food residue; skin-mild." },
];

// --- Cleaning Tools ---
const tools = [
  { name: "Lobby Dust Pan & Broom", badge: "Set", desc: "Angled lobby broom with ergonomic dust pan for quick spot collection in public & facility areas." },
  { name: "Brushes", desc: "Assorted utility brushes for floor edges, grout lines, equipment surfaces & general debris agitation." },
  { name: "Floor Wiper", desc: "Rubber-edged wiper removes excess wash water & slurry from smooth floor finishes efficiently." },
  { name: "Wringer Trolley", badge: "Combo", desc: "Dual-chamber bucket with high-efficiency down-press wringer reduces cross-contamination & moisture load." },
  { name: "Round Mopping System", desc: "Circular microfiber head with 360° swivel plate for multi-directional cleaning around fixtures." },
  { name: "Wet Mopping System", desc: "Absorbent looped yarn / microfiber solution release platform for high soil load removal." },
  { name: "Dry Mopping System", desc: "High dust capture microfiber frame for pre-clean & particulate control in corridors & halls." },
  { name: "Damp Mopping System", desc: "Light-moisture microfiber pad system optimized for daily film & light soil removal with fast drying." },
  { name: "Multi-Purpose Carry Basket", badge: "Caddy", desc: "Portable segmented caddy organizes chemicals, cloths, pads & hand tools for rapid deployment." },
  { name: "Window Washer & Squeegee", desc: "Paired microfiber washer and precision squeegee channel for streak-free glazing maintenance." },
  { name: "Stainless Steel Scrubber", desc: "Tough coiled stainless mesh removes baked-on residues from metal cookware & surfaces." },
  { name: "Green Scrub Pad", desc: "Aggressive synthetic fiber pad for heavy-duty surface restoration & stubborn build-up." },
  { name: "Sponge Pad", desc: "Dual-layer absorbent sponge with mild abrasive face for controlled cleaning of general surfaces." },
  { name: "Knitted Fabric Scourer", desc: "Soft knitted polymer web for moderate soil removal without deep scratching." },
  { name: "Steel Knitted Fabric Scourer", desc: "Reinforced knitted steel mesh for high-intensity scouring on durable cookware & grates." },
];

// --- Home Care Products ---
const homeItems = [
  { name: "Candle", badge: "Decor", desc: "Long-burn soy blend candle for warm ambient light and subtle fragrance in living and dining spaces." },
  { name: "Insulated Water Bottle", badge: "Insulated", desc: "Double-wall vacuum insulation keeps beverages cold up to 24h and hot up to 12h with sweat-free exterior." },
  { name: "Stainless Steel Water Bottle", badge: "Steel", desc: "304/18-8 stainless body for durability and taste neutrality; everyday hydration with robust build." },
  { name: "Copper Water Bottle", badge: "Copper", desc: "Food-safe lacquered copper interior/exterior for traditional style hydration with premium finish." },
  { name: "Casserole", badge: "Hot/Cold", desc: "Insulated casserole locks in temperature for extended serving—ideal for curries, rice and breads." },
  { name: "Insulated Snack Pack", badge: "Lunch", desc: "Compact, spill-resistant lunch/snack pack with thermal lining for school, office and travel." },
  { name: "Insulated Water Jug", badge: "Jug", desc: "High-capacity vacuum jug with ergonomic handle and spout; excellent retention for family or events." },
  { name: "Steel Flask", badge: "Flask", desc: "Travel flask with secure seal and cup-lid; retains beverage temperature and resists impact." },
  { name: "Pet Jars", badge: "Storage", desc: "Clear PET storage jars with screw tops for pantry organization—spices, pulses, snacks and more." },
];

const sections = [
  { key: "otc", label: "OTC Products", products: otcProducts, image: personalCareImg },
  { key: "lubes", label: "Lubes", products: lubeProducts, image: aimg },
  { key: "cleaning", label: "Cleaning Solutions", products: cleaningProducts, image: aimg },
  { key: "tools", label: "Cleaning Tools", products: tools, image: toolImg },
  { key: "home", label: "Home Care Products", products: homeItems, image: sectionImg },
];

export default function ProductsOTCHomeCare() {
  const [activeSection, setActiveSection] = useState("otc");
  const [query, setQuery] = useState("");
  const current = sections.find(s => s.key === activeSection);
  const filtered = useMemo(() => {
    if (!current) return [];
    const q = query.toLowerCase();
    return current.products.filter(p => !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [query, current]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-[#233362] min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">OTC & Home Care Products</h1>
                <p className="text-lg font-linear-grotesk text-white">Home &gt; Products &gt; OTC & Home Care</p>
              </div>
            </div>
          </div>
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {sections.map(s => (
                <button key={s.key} onClick={() => { setActiveSection(s.key); setQuery(""); }} className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 ${activeSection === s.key ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"}`}>{s.label}</button>
              ))}
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder={`Search ${current?.label}...`} className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 w-full">
              <img src={current?.image} alt={current?.label} className="rounded-2xl shadow-lg w-full object-cover max-h-96" />
            </div>
            <div className="md:w-2/3 w-full">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p, idx) => (
                  <div key={idx} className="bg-white border rounded-lg shadow p-4">
                    <div className="font-bold text-lg mb-1">{p.name}</div>
                    <div className="text-xs text-blue-600 mb-2">{p.badge}</div>
                    <div className="text-gray-700 mb-2">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
