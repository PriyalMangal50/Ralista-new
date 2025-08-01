import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-glancyr text-[#233362]">
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: 'black'}}>
                Ralista Source Pro LLP delivers dependable sourcing, OEM solutions, and global distribution across a diverse product range. With 20+ years of cross-border expertise, we bring speed, quality, and reliability to your supply chain—whether you're seeking hygiene goods, construction materials, engineered parts, or custom packaging.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pr-8 order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Professional team meeting" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;