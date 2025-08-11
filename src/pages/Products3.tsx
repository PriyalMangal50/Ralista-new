import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import personalCareImg from "@/assets/products.png";
import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, Leaf, Sparkles, Globe2, ChevronUp } from "lucide-react";

const horecaProducts = [
	{
		name: "Soaps for Hotels",
		category: "Soaps",
		badge: "Top Pick",
		desc: "Luxurious, aromatic soaps formulated to deliver a premium bathing experience for hotel guests. Each bar is enriched with moisturizing agents to leave skin soft and delicately scented.",
	},
	{
		name: "Shampoo / Conditioner",
		category: "Hair Care",
		desc: "A balanced hair care duo infused with nourishing botanicals. Cleanses thoroughly while restoring natural shine, making hair smooth and easy to manage.",
	},
	{
		name: "Anti Dandruff Shampoo",
		category: "Hair Care",
		badge: "Care",
		desc: "Clinically proven formula with scalp-soothing ingredients to reduce flaking and dryness, while leaving hair fresh and full of life. Perfect for regular use.",
	},
	{
		name: "Body Wash",
		category: "Body Care",
		desc: "Gentle, pH-balanced body wash with hydrating extracts that refresh and cleanse without stripping away natural oils. Suitable for all skin types, including sensitive skin.",
	},
	{
		name: "Baby Shower Gel",
		category: "Baby Care",
		badge: "Gentle",
		desc: "Tear-free, hypoallergenic gel specially made for infants’ sensitive skin. Gently cleanses while protecting natural moisture levels, leaving skin soft and nourished.",
	},
	{
		name: "Tearless Shampoo for Baby",
		category: "Baby Care",
		desc: "Ultra-soft shampoo enriched with natural oils to keep your baby’s hair silky and healthy. No irritation, no tears — just gentle care.",
	},
	{
		name: "Medicated Soap",
		category: "Soaps",
		desc: "Dermatologist-approved soap with active ingredients to help manage skin concerns like acne, irritation, and dryness while cleansing deeply. Available in various sizes.",
	},
	{
		name: "Bath Bombs",
		category: "Body Care",
		badge: "Spa",
		desc: "Effervescent spheres bursting with fragrance and skin-loving oils. Transforms bath time into a relaxing, spa-like ritual. Available in multiple scents.",
	},
	{
		name: "Exfoliating Soap",
		category: "Soaps",
		desc: "Natural exfoliants like oatmeal and walnut powder gently remove dead skin cells, revealing softer, more radiant skin. Ideal for weekly use.",
	},
	{
		name: "Moisturising Soap",
		category: "Soaps",
		desc: "A creamy, lather-rich formula enriched with shea butter to keep skin smooth, hydrated, and supple all day long.",
	},
	{
		name: "Hand Made Glycerin Bar",
		category: "Soaps",
		badge: "Artisan",
		desc: "Artisan-crafted soap retaining natural glycerin for exceptional moisture retention. Gentle enough for sensitive skin.",
	},
	{
		name: "Shave Cream / Pre-shave Oil",
		category: "Grooming",
		desc: "Lubricates and softens hair follicles, reducing razor drag. Ensures a smooth shave with minimal irritation. Suitable for sensitive skin.",
	},
	{
		name: "Moisturiser",
		category: "Grooming",
		badge: "Daily",
		desc: "Lightweight daily moisturizer with fast-absorbing hydration. Keeps skin soft without feeling greasy. Perfect for all-day wear.",
	},
	{
		name: "Oral Care",
		category: "Grooming",
		desc: "Comprehensive oral care products including toothpaste, mouthwash, and gels for maintaining fresh breath and strong gums.",
	},
];

const categories = [
	"All",
	"Soaps",
	"Hair Care",
	"Body Care",
	"Baby Care",
	"Grooming",
];

export default function Products3() {
	const [activeCat, setActiveCat] = useState("All");
	const [query, setQuery] = useState("");
	const [showTop, setShowTop] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 400);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const filtered = useMemo(() => {
		return horecaProducts.filter((p) => {
			const catOk = activeCat === "All" || p.category === activeCat;
			const q = query.toLowerCase();
			const qOk =
				!q ||
				p.name.toLowerCase().includes(q) ||
				p.desc.toLowerCase().includes(q);
			return catOk && qOk;
		});
	}, [activeCat, query]);

	return (
		<div className="min-h-screen bg-[#F1F5EB]">
			<Header />
			{/* Hero Section */}
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
                  Home &gt; Products &gt; HORECA Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

			{/* Intro + Image */}
			<section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
				<div className="lg:w-2/3">
					<h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-5 leading-tight">
						Head to Toe Care for the Hospitality Industry
					</h2>
					<p className="text-lg text-[#233362] leading-relaxed mb-6">
						Our HORECA personal care range is crafted to elevate the guest
						experience from the moment they step into your establishment. Each
						product combines quality, elegance, and practicality, ensuring guests
						feel valued and pampered. We prioritize skin safety, luxury, and
						sustainability in every formula.
					</p>
					<div className="flex flex-wrap gap-3">
						{categories.map((c) => (
							<button
								key={c}
								onClick={() => setActiveCat(c)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
									activeCat === c
										? "bg-[#233362] text-white border-[#233362] shadow"
										: " text-[#233362] hover:bg-white border-[#2333621a]"
								}`}
							>
								{c}
							</button>
						))}
					</div>
					<div className="mt-6 relative text-[#233362]">
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search products..."
							className="w-full max-w-md rounded-full bg-[#F1F5EB] backdrop-blur-sm border border-[#2333621f] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#233362]/40 placeholder:text-[#233362]"
						/>
					</div>
				</div>
				<div className="lg:w-1/3 w-full">
					<div className="relative group">
						<img
							src={personalCareImg}
							loading="lazy"
							alt="Personal Care"
							className="rounded-2xl shadow-lg w-full h-[360px] object-cover ring-1 ring-[#2333621f]"
						/>
					</div>
				</div>
			</section>

			{/* Product Grid */}
			<section className="py-14 container mx-auto px-6">
				<div className="mb-6 flex items-center justify-between">
					<h3 className="text-2xl font-glancyr text-[#233362]">
						{activeCat === "All" ? "All Products" : activeCat}
					</h3>
					<span className="text-xs tracking-wide text-[#23336299] uppercase">
						{filtered.length} items
					</span>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
					{filtered.map((product, idx) => (
						<div
							key={product.name + idx}
							className="group relative flex flex-col backdrop-blur-sm border border-[#23336212] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
						>
							{product.badge && (
								<span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide bg-[#233362] text-white px-2 py-1 rounded-full shadow">
									{product.badge}
								</span>
							)}
							<h4 className="text-lg font-semibold text-[#233362] mb-2 pr-10">
								{product.name}
							</h4>
							<p className="text-sm text-[#233362]/80 leading-relaxed max-h-24 overflow-hidden group-hover:max-h-[500px] transition-all duration-500">
								{product.desc}
							</p>
							<div className="mt-4 flex items-center gap-3 text-[11px] text-[#23336280]">
								<span className="px-2 py-1 bg-[#2333620d] rounded-md">
									{product.category}
								</span>
								
							</div>
							<div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-inset ring-transparent group-hover:ring-[#23336233] transition" />
							<div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent)] opacity-0 group-hover:opacity-100 transition duration-500" />
						</div>
					))}
				</div>
				{filtered.length === 0 && (
					<div className="text-center py-16 text-[#233362]">
						No products match your search.
					</div>
				)}
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-gradient-to-b from-[#F1F5EB] to-[#e3ecdd] rounded-t-[3rem] relative overflow-hidden">
				<div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_30%,#c2d7ba,transparent_60%)]" />
				<div className="container mx-auto px-6 relative">
					<div className="max-w-3xl mb-12">
						<p className="uppercase tracking-[0.3em] text-xs text-[#23336280] mb-3">
							Why Choose
						</p>
						<h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4 leading-tight">
							Why Choose Our HORECA Range?
						</h2>
						<p className="text-[#233362]/80 text-base leading-relaxed">
							Built for hospitality excellence – combining science-driven
							formulations, guest delight, and sustainable sourcing.
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-6 mb-14">
						{[
							{
								icon: (
									<ShieldCheck className="w-7 h-7 text-[#233362]" />
								),
								title: "Premium Quality",
								text: "Formulations engineered for luxury properties.",
							},
							{
								icon: <Leaf className="w-7 h-7 text-[#233362]" />,
								title: "Eco Minded",
								text: "Skin-safe, responsible ingredient selection.",
							},
							{
								icon: <Sparkles className="w-7 h-7 text-[#233362]" />,
								title: "Custom Branding",
								text: "Flexible white / private label options.",
							},
							{
								icon: <Globe2 className="w-7 h-7 text-[#233362]" />,
								title: "Trusted Global",
								text: "Used by leading chains and resorts.",
							},
						].map((card) => (
							<div
								key={card.title}
								className="p-6 backdrop-blur-sm rounded-2xl border border-[#23336212] shadow-sm hover:shadow-md transition group"
							>
								<div className="mb-4">{card.icon}</div>
								<h3 className="font-semibold text-[#233362] mb-1">
									{card.title}
								</h3>
								<p className="text-sm text-[#233362]/70 leading-relaxed">
									{card.text}
								</p>
							</div>
						))}
					</div>
					
				</div>
			</section>

			<Footer />

			{showTop && (
				<button
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
					className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#233362] text-white shadow-lg hover:shadow-xl transition"
					aria-label="Back to top"
				>
					<ChevronUp className="w-5 h-5" />
				</button>
			)}
		</div>
	);
}
