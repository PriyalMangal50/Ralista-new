import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/IndustriesSection";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4 py-8">
          <div 
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(/src/assets/hero-bg.jpg)`}}
          >
            <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-8 mt-8">
                <h1 className="text-4xl lg:text-5xl font-bold font-glancyr mb-4 text-white">
                  Industries We Serve
                </h1>
                <p className="text-lg font-linear-grotesk text-gray-300">
                  Comprehensive solutions across multiple industry sectors worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Grid Section */}
      <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-1.jpg" alt="Hospitality & HORECA" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Hospitality & HORECA
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-2.jpg" alt="Healthcare" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Healthcare
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-3.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Manufacturing
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-4.jpg" alt="Retail" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Retail
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-1.jpg" alt="Education" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Education
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/src/assets/service-2.jpg" alt="Agriculture" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-[#233362] text-lg font-bold font-linear-grotesk text-center bg-white rounded-lg py-2">
                  Agriculture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Industries;