import icon1 from "@/assets/01.png";
import icon2 from "@/assets/02.png";
import icon3 from "@/assets/03.png";
import icon4 from "@/assets/04.png";
import icon5 from "@/assets/05.png";

const WhyChooseSection = () => {
  const features = [
    {
      title: "Multi-Category Expertise",
      description: "From personal care to precision components, we handle a wide sourcing footprint under one roof.",
      icon: icon1
    },
    {
      title: "End-to-End Control",
      description: "From design to delivery, we manage product development, compliance, packaging, and documentation.",
      icon: icon2
    },
    {
      title: "Global Delivery, Indian Backbone",
      description: "Rooted in India with a wide export network across the Middle East, Europe, Africa, and the Americas.",
      icon: icon3
    },
    {
      title: "Transparent Sourcing",
      description: "You see what we see—real-time updates, sample validation, and proactive communication at every step.",
      icon: icon4
    },
    {
      title: "Connect with other categories",
      description: "Personal Care Products, Cleaning & Hygiene, Outdoor & HORECA, Construction & Engineering, Pet Care, Packaging & Textiles.",
      icon: icon5
    }
  ];

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#F1F5EB' }}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-glancyr text-[#233362]">
            Why Choose Ralista?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="w-full sm:w-80 lg:w-96 h-52 sm:h-60 bg-transparent text-left p-4 sm:p-6 rounded-xl shadow-sm flex flex-col items-start">
    <img src={icon} alt={title} className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
    <h3 className="text-base sm:text-xl mb-2 sm:mb-4 font-semibold font-glancyr text-[#233362]">
      {title}
    </h3>
    <p className="text-xs sm:text-sm font-linear-grotesk text-[#233362]">{description}</p>
  </div>
);

export default WhyChooseSection;
