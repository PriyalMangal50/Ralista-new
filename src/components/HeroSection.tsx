import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 py-8">
        <div 
          className="text-white min-h-[75vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${heroBg})`}}
        >
          <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>
          <div className="relative px-8 py-12 h-full flex items-center">
            <div className="w-full">
              <div className="space-y-6 ml-16 mt-16">
                <h1 className="text-3xl lg:text-4xl font-medium font-glancyr leading-tight">
                  Global Sourcing OEM
                  <br />
                  Procurement and Supply
                  <br />
                  Market Expansion
                </h1>
                <div>
                  <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-full font-linear-grotesk hover:bg-white hover:text-black transition-colors text-sm">
                    Get On a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;