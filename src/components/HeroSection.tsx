import earthImage from "@/assets/earth-hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#233362] text-white min-h-[75vh] relative overflow-hidden rounded-[2rem] mb-8">
          <div className="px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-3xl lg:text-4xl font-medium font-glancyr leading-tight">
                  Global Sourcing OEM
                  <br />
                  Procurement and Supply
                  <br />
                  Market Expansion
                </h1>
                <div className="ml-8">
                  <p className="text-lg text-gray-300 font-linear-grotesk font-normal mb-4">
                    Connecting businesses worldwide with innovative solutions and strategic partnerships for sustainable growth.
                  </p>
                  <button className="bg-[#233362] text-white border-2 border-white px-4 py-2 rounded-full font-linear-grotesk hover:bg-white hover:text-[#233362] transition-colors text-sm">
                    Get On a Call
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-end mt-8 lg:mt-0">
                <div className="relative">
                  <img 
                    src={earthImage} 
                    alt="Earth globe representing global reach" 
                    className="w-80 h-80 object-contain rounded-3xl"
                  />
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