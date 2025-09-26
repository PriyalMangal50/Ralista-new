import heroBg from "@/assets/hero-7.jpeg";

const HeroSection = () => {
  return (
  <section className="relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <div 
          className="text-white min-h-[45vh] sm:min-h-[75vh] relative overflow-hidden rounded-xl sm:rounded-[2rem] mb-6 sm:mb-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="relative px-4 sm:px-8 py-6 sm:py-12 h-full flex items-center">
            <div className="w-full">
              <div className="space-y-4 sm:space-y-6 ml-4 sm:ml-16 mt-8 sm:mt-24">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-glancyr font-[400] leading-tight antialiased">
                  Sourcing & Supply
                  <br />
                  Personal Care, Home Care
                  <br />
                  Industrial, Construction & More
                </h1>
                
                <div>
                  <button className="bg-transparent text-white border-2 border-white px-4 sm:px-6 py-2 rounded-full font-linear-grotesk hover:bg-white hover:text-black transition-colors text-lg sm:text-xl">
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
