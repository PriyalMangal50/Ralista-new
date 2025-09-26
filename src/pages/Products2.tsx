import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import wipesImg from "@/assets/products.png";
import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, Leaf, Sparkles, Globe2, ChevronUp, PackageOpen, Droplets, Stethoscope, Baby, PawPrint, Car } from "lucide-react";

const allProducts = [
  { name: "Wet Wipe", category: "Personal", badge: "Popular", desc: "All-purpose wipes designed for instant freshness and cleanliness on the go. They effectively remove dirt, sweat, and light impurities, leaving behind a gentle scent." },
  { name: "Baby Wipe", category: "Baby Care", badge: "Gentle", desc: "Hypoallergenic, extra-soft wipes for delicate baby skin. Free from alcohol and harsh chemicals, they provide safe and gentle cleaning for everyday use." },
  { name: "Feminine Wipe", category: "Personal", desc: "pH-balanced wipes to maintain freshness and comfort all day. Perfect for travel, work, or after workouts, ensuring hygiene wherever you are." },
  { name: "Nail Polish Remover Wipe", category: "Beauty", desc: "Mess-free wipes that remove nail polish quickly without harsh odors. A compact solution for beauty touch-ups anytime, anywhere." },
  { name: "Anti Bacterial Wipe", category: "Medical", badge: "99.9%", desc: "Kills 99.9% of bacteria while keeping skin soft with moisturizing aloe. Ideal for public spaces, travel, or daily personal hygiene." },
  { name: "Hair Color Stain Remover Wipe", category: "Beauty", desc: "Quickly removes hair dye stains from skin during or after coloring. Gentle on skin while being highly effective on tough pigment marks." },
  { name: "Butt Cleaning Wipe", category: "Personal", desc: "Soft and gentle wipes for personal cleaning. Dermatologically tested to ensure comfort, freshness, and hygiene." },
  { name: "Eye Lid Wipe", category: "Medical", desc: "Sterile wipes specifically formulated for sensitive eyelids. Ideal for removing debris, allergens, or makeup without irritation." },
  { name: "Alcohol Prep Pad", category: "Medical", badge: "Sterile", desc: "Small, sterile pads saturated with alcohol for cleaning skin before injections or medical procedures. Trusted by healthcare professionals." },
  { name: "Shoe Cleaning Wipe", category: "Surface Care", badge: "Care", desc: "Instantly refresh your shoes by removing dust, dirt, and light scuffs. Suitable for leather, canvas, and synthetic materials." },
  { name: "Screen Cleaning Wipe", category: "Surface Care", desc: "Streak-free wipes for cleaning phones, tablets, laptops, and monitors. Removes fingerprints and smudges without damaging screens." },
  { name: "Medical Care Wipe", category: "Medical", desc: "High-quality, hospital-grade wipes designed for clinical hygiene needs. Gentle yet effective for cleaning sensitive areas." },
  { name: "Pet Wipe", category: "Pet Care", badge: "Pet", desc: "Safe, gentle wipes for cleaning your pet’s fur, paws, and sensitive areas between baths. Helps reduce odor and maintain hygiene." },
  { name: "Car Dashboard & Windshield Cleaning Wipe", category: "Automotive", desc: "Removes dust, smudges, and fingerprints from car interiors and glass. Leaves a streak-free, polished finish." },
  { name: "Sports Wipe", category: "Personal", desc: "Refresh yourself after workouts or outdoor activities. Removes sweat, odor, and dirt while being gentle on skin." },
  { name: "Surgical Wipes / Disinfectant Wipes", category: "Medical", badge: "Sterile", desc: "Sterile disinfectant wipes for operating rooms and medical environments. Eliminates germs and meets strict safety standards." },
  { name: "Car Cleaning Wipe", category: "Automotive", desc: "Convenient wipes for quick car cleaning, inside and out. Removes dirt and dust without water." },
  { name: "Face Mask Sheet", category: "Beauty", desc: "Hydrating sheet mask enriched with nourishing ingredients to restore and rejuvenate skin in minutes." },
  { name: "Multi Purpose Dry Tissue", category: "Dry Range", desc: "Soft yet durable tissues for a variety of uses, from personal care to household cleaning." },
  { name: "Dry Eye Lid Wipe", category: "Dry Range", desc: "Gentle dry wipes designed for sensitive eyelids. Perfect for removing debris or light makeup without moisture." },
  { name: "Dry Wipes / Towels", category: "Dry Range", desc: "Multipurpose cleaning wipes that can be used dry or with water. Extra-absorbent and durable." },
  { name: "Cotton Balls, Swabs & Rounds", category: "Cotton", desc: "Essential personal care items for skincare, makeup application, and first aid. Made with 100% pure cotton." },
  { name: "Adult Diapers & Diaper Pants", category: "Incontinence", badge: "Care", desc: "Comfortable, leak-proof protection for adult incontinence care. Designed for maximum absorption and discretion." },
  { name: "Underpads", category: "Incontinence", desc: "Disposable pads to protect bedding and furniture. Highly absorbent and comfortable for extended use." },
  { name: "Sanitary Napkins", category: "Feminine Care", desc: "Ultra-absorbent pads for menstrual protection. Soft and breathable for all-day comfort." },
  { name: "Period Panties", category: "Feminine Care", desc: "Reusable, eco-friendly menstrual underwear that provides reliable leak protection without discomfort." },
  { name: "Panty Liners", category: "Feminine Care", desc: "Light protection for daily freshness. Thin, comfortable, and discreet for everyday wear." },
  { name: "Baby Diaper Pants", category: "Baby Care", badge: "New", desc: "Breathable, soft, and leak-proof diapers for babies. Easy to wear and change for parents’ convenience." },
];

const categories = [
  "All",
  "Personal",
  "Baby Care",
  "Beauty",
  "Medical",
  "Surface Care",
  "Pet Care",
  "Automotive",
  "Dry Range",
  "Cotton",
  "Incontinence",
  "Feminine Care",
];

const categoryIcons: Record<string, JSX.Element> = {
  Personal: <Droplets className="w-4 h-4" />,
  "Baby Care": <Baby className="w-4 h-4" />,
  Beauty: <Sparkles className="w-4 h-4" />,
  Medical: <Stethoscope className="w-4 h-4" />,
  "Surface Care": <PackageOpen className="w-4 h-4" />,
  "Pet Care": <PawPrint className="w-4 h-4" />,
  Automotive: <Car className="w-4 h-4" />,
  "Dry Range": <PackageOpen className="w-4 h-4" />,
  Cotton: <PackageOpen className="w-4 h-4" />,
  Incontinence: <ShieldCheck className="w-4 h-4" />,
  "Feminine Care": <Leaf className="w-4 h-4" />,
};

export default function Products2() {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allProducts.filter(p => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const qOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [activeCat, query]);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: '#ffffff'}}>
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
                  Home &gt; Products &gt; Wet Wipes & Personal Hygiene
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-5 leading-tight">Cleanliness, Care & Convenience</h2>
          <p className="text-lg text-[#233362] mb-4 leading-relaxed">From wet wipes to medical-grade hygiene products, our range is designed to cater to every need—whether it’s personal care, travel, baby care, or clinical use.</p>
          <p className="text-lg text-[#233362] leading-relaxed mb-6">Every product is made with skin-friendly materials and precise quality control to ensure safety, comfort, and effectiveness.</p>
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeCat === c ? "bg-[#233362] text-white border-[#233362] shadow" : "text-[#233362] hover:bg-white border-[#2333621a]"}`}
              >{c}</button>
            ))}
          </div>
          <div className="mt-6 relative text-[#233362]">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full max-w-md rounded-full bg-[#ffffff] backdrop-blur-sm border border-[#2333621f] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#23336280]"
            />
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="relative group">
            <img src={wipesImg} loading="lazy" alt="Wet Wipes & Hygiene" className="rounded-2xl shadow-lg w-full h-[360px] object-cover ring-1 ring-[#2333621f]" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#233362]/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-14 container mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-glancyr text-[#233362]">{activeCat === "All" ? "All Products" : activeCat}</h3>
          <span className="text-xs tracking-wide text-[#23336299] uppercase">{filtered.length} items</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
          {filtered.map((product, idx) => (
            <div key={product.name + idx} className="group relative flex flex-col backdrop-blur-sm border border-[#23336212] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {product.badge && (
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">{product.badge}</span>
              )}
              <h4 className="text-lg font-semibold text-[#233362] mb-2 pr-10">{product.name}</h4>
              <p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[500px] transition-all duration-500">{product.desc}</p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-[#23336280]">
                <span className="flex items-center gap-1 px-2 py-1 bg-[#2333620d] rounded-md">{categoryIcons[product.category] || <PackageOpen className="w-4 h-4" />}{product.category}</span>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336233] transition" />
              <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent)] opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (<div className="text-center py-16 text-[#233362]">No products match your search.</div>)}
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#ffffff] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_30%,#c2d7ba,transparent_60%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mb-12">
            <p className="uppercase tracking-[0.3em] text-sm text-[#23336280] mb-3">Why Choose</p>
            <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4 leading-tight">Why Choose Our Hygiene Range?</h2>
            <p className="text-[#233362]/80 text-base leading-relaxed">Advanced hygiene solutions spanning personal, medical, and specialty use – engineered for safety, convenience, and trust.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-14">
            {[
              { icon: <ShieldCheck className="w-7 h-7 text-[#233362]" />, title: "Dermatology Safe", text: "Tested for sensitive skin types." },
              { icon: <Leaf className="w-7 h-7 text-[#233362]" />, title: "Eco Conscious", text: "Responsible material selection." },
              { icon: <Sparkles className="w-7 h-7 text-[#233362]" />, title: "Private Label", text: "Custom branding & pack sizes." },
              { icon: <Globe2 className="w-7 h-7 text-[#233362]" />, title: "Global Trust", text: "Used across healthcare & retail." },
            ].map(card => (
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

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#233362] text-white shadow-lg hover:shadow-xl transition" aria-label="Back to top">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
