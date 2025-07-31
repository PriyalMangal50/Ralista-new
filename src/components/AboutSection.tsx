import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 font-glancyr">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-inter">
              At NetGrit, we are dedicated to bridging global markets through innovative OEM procurement and supply chain solutions. Our expertise spans across diverse industries, helping businesses expand their reach and optimize their operations worldwide.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-inter">
              With years of experience in international trade and market expansion, we provide comprehensive solutions that enable our clients to achieve sustainable growth and competitive advantage in the global marketplace.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-inter">
              Our commitment to excellence and strategic partnerships ensures that every project we undertake delivers exceptional value and long-term success for our clients.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Professional team meeting" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;