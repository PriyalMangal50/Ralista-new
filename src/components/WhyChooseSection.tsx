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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <span className="text-[#233362] font-bold text-2xl font-glancyr">0{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 font-glancyr text-[#233362]">
                  {feature.title}
                </h3>
                <p className="font-linear-grotesk text-[#233362]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index + 3} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <span className="text-[#233362] font-bold text-2xl font-glancyr">0{index + 4}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 font-glancyr text-[#233362]">
                  {feature.title}
                </h3>
                <p className="font-linear-grotesk text-[#233362]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;