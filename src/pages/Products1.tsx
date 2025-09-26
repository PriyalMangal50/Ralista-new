import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/ralista-2.jpeg";
import personalCareImg from "@/assets/products.png";
import categoryImg from "@/assets/a1.png"; // placeholder image

const categories = [
  {
    name: "Skin Care",
    description:
      "Our Skin Care range is designed to nourish, protect, and rejuvenate your skin across all seasons. From creams that lock in moisture, to face washes that cleanse without stripping, every product is crafted with gentle yet effective ingredients. Perfect for daily care, our formulas help maintain a natural, lasting glow.",
    items: [
      "Cream – Deeply hydrating and repairing",
      "Lotion – Light, everyday nourishment",
      "Face Wash – Gentle yet effective cleansing",
      "Serum – Concentrated skin boosters",
      "Gel – Cooling and refreshing care",
    ],
  },
  {
    name: "Hair Care",
    description:
      "Healthy, shiny hair begins with proper care. Our Hair Care line offers shampoos for deep cleansing, conditioners for silky smoothness, and oils to restore natural strength. Whether you want everyday freshness or targeted treatment, our range keeps your hair vibrant and manageable.",
    items: [
      "Shampoo – Gentle cleansing for all hair types",
      "Pomade – Styling with natural hold",
      "Tonic – Stimulates scalp health",
      "Conditioner – Smoothness and shine",
      "Oil – Nourishment and protection",
      "Gel – Flexible styling solutions",
    ],
  },
  {
    name: "Baby Care",
    description:
      "Delicate skin deserves the gentlest touch. Our Baby Care range is specially formulated for your little ones, with products that protect, soothe, and nourish from head to toe. Safe, dermatologically tested, and free from harsh chemicals.",
    items: [
      "Baby Powder – Softness and freshness",
      "Baby Shampoo – Mild cleansing for tender scalp",
      "Baby Oil – Gentle moisturization",
      "Rash Cream – Protection from diaper rash",
      "Baby Lotion – Lightweight daily hydration",
    ],
  },
  {
    name: "Petroleum Jelly",
    description:
      "A multi-purpose skin essential that locks in moisture, protects against dryness, and aids in the healing of minor cuts and chafing. Perfect for use on lips, hands, feet, and any dry skin area.",
    items: [],
  },
  {
    name: "Personal Care",
    description:
      "From daily cleansers to targeted treatments, our Personal Care range offers everything you need for complete hygiene and wellness. Thoughtfully formulated for comfort, convenience, and long-lasting freshness.",
    items: [
      "Cream – Rich skin moisturizers",
      "Scrub – Exfoliation for smooth skin",
      "Shower Gel – Refreshing daily cleanse",
      "Facial Cleanser – Gentle facial care",
      "Hair Removal Cream (Hands) – Smooth skin in minutes",
      "Feet & Lip Care – Intensive repair and protection",
    ],
  },
  {
    name: "Oral Care",
    description:
      "A healthy smile starts with complete oral care. Our range includes toothpaste for cavity protection, mouthwash for fresh breath, and gels for targeted relief. Designed for everyday freshness and long-term dental health.",
    items: [
      "Toothpaste – Protection and whitening",
      "Mouthwash – Fresh breath and germ control",
      "Gel – Soothing gum care",
      "Toothbrush – Effective cleaning design",
    ],
  },
];

export default function Products1() {
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
                  Home &gt; Products &gt; Personal Care Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Intro */}
      <section className="py-16 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-4">
            Head to Toe Personal Care Products
          </h2>
          <p className="text-lg text-[#233362] mb-4">
            From skin to hair, oral hygiene to baby care — our personal care
            range covers every essential for your daily well-being. Each product
            is made with safe, high-quality ingredients to give you the best
            care possible.
          </p>
          <p className="text-lg text-[#233362]">
            Whether for personal use, retail shelves, or bulk supply, our
            diverse collection adapts to your needs without compromising on
            quality, safety, or performance.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img
            src={personalCareImg}
            alt="Personal Care"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 container mx-auto px-6 space-y-16">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="lg:w-5/12">
              <img
                src={categoryImg}
                alt={cat.name}
                className="rounded-lg w-full max-h-72 object-cover"
              />
            </div>
            <div className="lg:w-7/12">
              <h3 className="text-3xl font-glancyr text-[#233362] mb-4">
                {cat.name}
              </h3>
              <p className="text-lg text-[#233362] mb-3">{cat.description}</p>
              {cat.items.length > 0 && (
                <ul className="list-disc ml-5 space-y-1 text-[#233362]">
                  {cat.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-glancyr text-[#233362] mb-6">
            Why Choose Our Personal Care Range?
          </h2>
          <p className="text-lg text-[#233362] mb-4">
            Choosing our products means choosing quality, safety, and care. We
            believe in delivering personal care that truly makes a difference in
            everyday life.
          </p>
          <ul className="list-disc ml-6 text-lg text-[#233362] space-y-2">
            <li>
              Manufactured under strict quality control for safety & performance.
            </li>
            <li>
              Available in retail, bulk, and OEM/private label formats to suit
              all needs.
            </li>
            <li>
              Wide variety of products covering every personal care category.
            </li>
            <li>
              Flexible packaging & branding solutions for businesses and
              partners.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
