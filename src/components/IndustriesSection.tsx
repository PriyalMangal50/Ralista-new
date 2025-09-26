import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-4.jpg";
import service6 from "@/assets/service-4.jpg";

const IndustriesSection = () => {
  const industries = [
    { image: service1, hasLabel: true },
    { image: service2, hasLabel: false },
    { image: service3, hasLabel: false },
    { image: service4, hasLabel: false },
    { image: service1, hasLabel: false },
    { image: service6, hasLabel: false }
  ];

  return (
    <section className="py-24" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4">
        <div className="bg-[#233362] rounded-[2rem] p-8">
          <div className="mb-8 flex justify-between items-center">
  {/* Shifted heading slightly right */}
  <h2 className="text-4xl lg:text-5xl text-white font-glancyr ml-16">
    Industries
  </h2>

  {/* Shifted buttons slightly left */}
  <div className="flex space-x-2 mr-16">
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

          
          <div className="flex gap-4 px-8 overflow-hidden justify-center">
  {industries.map((industry, index) => (
    <div
      key={index}
      className={`relative rounded-2xl overflow-hidden flex-shrink-0 ${
        index === 0 ? "w-72 h-64" : "w-40 h-64"
      }`}
    >
      <img
        src={industry.image}
        alt={`Industry ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Yellow inset overlay for images 2–6 */}
      {index !== 0 && (
        <div className="absolute inset-0 bg-[#D0F500] opacity-20 pointer-events-none z-10" />
      )}

      {/* Label on first image only */}
      {industry.hasLabel && index === 0 && (
        <div className="absolute bottom-4 left-4 right-4 bg-[#D0F500] p-3 rounded-xl z-20">
          <p className="text-[#233362] text-xl font-linear-grotesk text-center">
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