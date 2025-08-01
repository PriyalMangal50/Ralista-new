import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Professional team meeting" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-glancyr" style={{color: 'black'}}>
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: 'black'}}>
                At Ralista, we are dedicated to bridging global markets through innovative OEM procurement and supply chain solutions. Our expertise spans across diverse industries, helping businesses expand their reach and optimize their operations worldwide.
              </p>
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: 'black'}}>
                With years of experience in international trade and market expansion, we provide comprehensive solutions that enable our clients to achieve sustainable growth and competitive advantage in the global marketplace.
              </p>
              <p className="text-lg leading-relaxed font-linear-grotesk" style={{color: 'black'}}>
                Our commitment to excellence and strategic partnerships ensures that every project we undertake delivers exceptional value and long-term success for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;