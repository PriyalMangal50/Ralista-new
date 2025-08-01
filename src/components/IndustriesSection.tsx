import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const IndustriesSection = () => {
  const industries = [
    { image: service1, hasLabel: true },
    { image: service2, hasLabel: false },
    { image: service3, hasLabel: false },
    { image: service4, hasLabel: false },
    { image: service1, hasLabel: false },
    { image: service2, hasLabel: false }
  ];

  return (
    <section className="py-20" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4">
        <div className="bg-[#233362] rounded-[2rem] p-8">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-glancyr">
              Industries
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden h-40">
                <img 
                  src={industry.image} 
                  alt={`Industry ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {industry.hasLabel && index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#D0F500] p-2">
                    <p className="text-[#233362] text-sm font-semibold font-linear-grotesk text-center">
                      Hospitality & HORECA
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;