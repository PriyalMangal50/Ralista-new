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
    <section className="py-24" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4">
        <div className="bg-[#233362] rounded-[2rem] p-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-glancyr">
              Industries
            </h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-[#D0F500] rounded-full flex items-center justify-center hover:bg-[#D0F500]/90 transition-colors">
                <svg className="w-5 h-5 text-[#233362]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-[#D0F500] rounded-full flex items-center justify-center hover:bg-[#D0F500]/90 transition-colors">
                <svg className="w-5 h-5 text-[#233362]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-8">
            {industries.map((industry, index) => (
              <div key={index} className={`relative rounded-lg overflow-hidden h-40 ${index === 0 ? 'w-full ml-4' : index >= 1 && index <= 4 ? 'w-4/5 mx-auto' : 'w-full mr-4'}`}>
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