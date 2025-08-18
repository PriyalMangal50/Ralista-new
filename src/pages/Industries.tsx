import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images from assets
import heroImage from "@/assets/ralista-2.jpeg";
import techImage from "@/assets/industry-2.png";
import manufacturingImage from "@/assets/64efe07634843a2a4af85d23ea869228f18f1f44.png";
import softwareImage from "@/assets/5cb12308eb835ec814b324f4ac4b6f6d94970178.png";
import businessImage from "@/assets/fd16d6e55b775db62ebc8b49d4e1bf84a10e94ad.png";
import digitalImage from "@/assets/400f757d06024e83e0d0f4282b756de8bacbe43a.png";
import environmentImage from "@/assets/36bb4895978c5b0b618adfe7d948f0374153867e.png";

const Industries = () => {
 const industries = [
  { src: techImage, alt: "Hospitality & HORECA", label: "Hospitality & HORECA" },
  { src: manufacturingImage, alt: "Retail Chains & Distributors", label: "Retail Chains & Distributors" },
  { src: softwareImage, alt: "Construction & Engineering", label: "Construction & Engineering" },
  { src: businessImage, alt: "OEM Brands", label: "OEM Brands" },
  { src: digitalImage, alt: "Hygiene & FMCG Brands", label: "Hygiene & FMCG Brands" },
  { src: environmentImage, alt: "Automotive & Homecare Brands", label: "Automotive & Homecare Brands" },
];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <div
            className="text-white min-h-[40vh] sm:min-h-[60vh] relative overflow-hidden rounded-xl sm:rounded-[2rem] mb-6 sm:mb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="relative px-4 sm:px-8 py-6 sm:py-12 h-full flex items-start justify-start">
              <div className="text-left ml-4 sm:ml-16 mt-8 sm:mt-24">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-glancyr mb-3 sm:mb-4 text-white">
                  Industries
                </h1>
                <p className="text-base sm:text-lg font-linear-grotesk text-gray-300">
                  Home &gt; Industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-6" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3 shadow-md w-full h-80 flex flex-col items-center justify-center text-center"
              >
                <img
                  src={industry.src}
                  alt={industry.alt}
                  className="w-40 h-40 sm:w-52 sm:h-52 object-contain mb-2"
                />
                <p className="text-[#233362] text-base font-semibold font-linear-grotesk">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Industries;
