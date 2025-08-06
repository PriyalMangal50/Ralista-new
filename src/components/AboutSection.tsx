import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl mb-4 font-glancyr" style={{color:'#233362'}}>
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: '#233362'}}>
Ralista Source Pro LLP is your trusted global sourcing and distribution partner. With over 20 years of cross-border trade expertise, we specialize in delivering end-to-end solutions across a wide range of industries. From everyday hygiene essentials and personal care items to construction materials, industrial components, and customized packaging, we ensure quality, consistency, and speed at every step. Our tailored OEM and private-label services are designed to help your brand scale quickly with confidence.</p>
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