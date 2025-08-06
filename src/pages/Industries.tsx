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
    { src: techImage, alt: "Technology Industry", label: "Technology Solutions" },
    { src: manufacturingImage, alt: "Manufacturing Industry", label: "Manufacturing" },
    { src: softwareImage, alt: "Software Development", label: "Software Development" },
    { src: businessImage, alt: "Business Solutions", label: "Business Solutions" },
    { src: digitalImage, alt: "Digital Services", label: "Digital Services" },
    { src: environmentImage, alt: "Environmental Solutions", label: "Environmental" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F1F5EB" }}>
        <div className="container mx-auto px-4 py-8">
          <div
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">
                  Industries
                </h1>
                <p className="text-lg font-linear-grotesk text-gray-300">
                  Home &gt; Industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-6" style={{ backgroundColor: "#F1F5EB" }}>
  <div className="flex flex-col items-center space-y-4">
    {[0, 2, 4].map((i) => (
      <div key={i} className="flex space-x-6">
        {[industries[i], industries[i + 1]].map((industry, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-3 shadow-md w-96 h-80 flex flex-col items-center justify-center text-center"
          >
            <img
              src={industry.src}
              alt={industry.alt}
              className="w-52 h-52 object-contain mb-2"
            />
            <p className="text-[#233362] text-base font-semibold font-linear-grotesk">
              {industry.label}
            </p>
          </div>
        ))}
      </div>
    ))}
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Industries;
