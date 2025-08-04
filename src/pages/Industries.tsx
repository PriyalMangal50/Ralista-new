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
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop" 
                alt="Technology Industry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Technology Solutions
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop" 
                alt="Manufacturing Industry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Manufacturing
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop" 
                alt="Software Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Software Development
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop" 
                alt="Business Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Business Solutions
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop" 
                alt="Digital Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Digital Services
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500&h=300&fit=crop" 
                alt="Environmental Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-xl">
                <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                  Environmental
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