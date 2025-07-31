import earthImage from "@/assets/earth-hero.png";

const HeroSection = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="bg-brand-dark text-white min-h-[80vh] relative overflow-hidden rounded-b-[3rem] mx-4 mb-8">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold font-glancyr leading-tight">
                Global Sourcing OEM
                <br />
                Procurement and Supply
                <br />
                Market Expansion
              </h1>
              <p className="text-lg text-gray-300 font-linear-grotesk">
                Connecting businesses worldwide with innovative solutions and strategic partnerships for sustainable growth.
              </p>
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