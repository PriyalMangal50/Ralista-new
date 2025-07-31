const WhyChooseSection = () => {
  const features = [
    {
      title: "Global Network",
      description: "Extensive worldwide network of trusted partners and suppliers"
    },
    {
      title: "Quality Assurance", 
      description: "Rigorous quality control processes ensuring premium standards"
    },
    {
      title: "Cost Optimization",
      description: "Strategic cost reduction without compromising on quality"
    },
    {
      title: "Expert Team",
      description: "Industry experts with decades of combined experience"
    },
    {
      title: "Timely Delivery",
      description: "Reliable delivery schedules meeting your business deadlines"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 font-glancyr">
            Why Choose NetGrit?
          </h2>
          <p className="text-gray-600 text-lg font-inter">
            Your trusted partner for global business success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-dark font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3 font-glancyr">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;