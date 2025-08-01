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
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-glancyr" style={{color: 'black'}}>
            Why Choose Ralista?
          </h2>
          <p className="text-lg font-linear-grotesk" style={{color: 'black'}}>
            Your trusted partner for global business success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#D0F500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#233362] font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-glancyr" style={{color: 'black'}}>
                {feature.title}
              </h3>
              <p className="font-linear-grotesk" style={{color: 'black'}}>
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