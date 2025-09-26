import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl mb-4 font-glancyr" style={{color:'#233362'}}>
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: '#233362'}}>
Ralista Source Pro LLP is your trusted partner for global sourcing, OEM and distribution across India and worldwide. Our expertise spans Personal Care, Hygiene, OTC & Home Care, Kitchenware, Industrial Components and more. We deliver quality, speed and reliability for every product category—whether you need custom private-label manufacturing. With 20+ years of cross-border trade experience, we help brands, offering tailored procurement and market expansion services for every industry.
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