const IndustriesSection = () => {
  const industries = [
    "Manufacturing",
    "Electronics", 
    "Automotive",
    "Healthcare",
    "Textiles",
    "Consumer Goods"
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-glancyr">
            Industries
          </h2>
          <p className="text-gray-300 text-lg font-inter">
            Serving diverse sectors with specialized expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg font-semibold font-inter">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;