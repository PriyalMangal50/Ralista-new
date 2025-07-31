import earthImage from "@/assets/earth-hero.png";

const HeroSection = () => {
  return (
    <section className="bg-brand-dark text-white min-h-[80vh] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="curved-box p-12 mx-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold font-glancyr leading-tight">
                Global Sourcing OEM
                <br />
                Procurement and Supply
                <br />
                Market Expansion
              </h1>
              <p className="text-xl text-gray-300 font-inter">
                Connecting businesses worldwide with innovative solutions and strategic partnerships for sustainable growth.
              </p>
              <div className="flex space-x-4">
                <button className="bg-brand-lime text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-lime/90 transition-colors">
                  Learn More
                </button>
                <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Get in Touch
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
    </section>
  );
};

export default HeroSection;