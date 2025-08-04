import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Products3 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4 py-8">
          <div 
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroBg})`}}
          >
            <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-8 mt-8">
                <h1 className="text-4xl lg:text-5xl font-bold font-glancyr mb-4 text-white">
                  Products
                </h1>
                <p className="text-lg font-linear-grotesk text-gray-300">
                  Home &gt; Products &gt; Specialty Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Content Section */}
      <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-glancyr text-black">
                Specialty & Custom Solutions
              </h2>
              <h3 className="text-xl lg:text-2xl font-medium mb-6 font-linear-grotesk text-black">
                Tailored Products for Unique Requirements
              </h3>
              <p className="text-lg font-linear-grotesk text-black leading-relaxed">
                Our specialty product division focuses on unique, custom-engineered solutions for specific industry needs. From niche applications to specialized formulations, we develop products that address particular challenges and requirements. Each solution is crafted with precision, innovation, and deep understanding of market demands.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img 
                src="/lovable-uploads/a580a994-aa6b-41af-8f26-89a0f136b28a.png" 
                alt="Personal Care Products" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 font-glancyr text-black">
              Why?
            </h2>
            <p className="text-lg font-linear-grotesk text-black leading-relaxed">
              Custom Development – Tailored solutions for unique market needs. Innovation Focus – Cutting-edge technology and advanced formulations. Rapid Prototyping – Quick turnaround from concept to market-ready product. Expert Consultation – Deep industry knowledge and technical expertise.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products3;