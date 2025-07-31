import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Global Sourcing",
      description: "Comprehensive sourcing solutions connecting you with trusted suppliers worldwide.",
      image: service1
    },
    {
      title: "OEM Manufacturing",
      description: "Custom manufacturing partnerships tailored to your specific product requirements.",
      image: service2
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization for maximum efficiency and cost reduction.",
      image: service3
    },
    {
      title: "Market Expansion",
      description: "Strategic market entry solutions to help you expand into new territories.",
      image: service4
    },
    {
      title: "Procurement Services",
      description: "Professional procurement services ensuring quality and cost-effectiveness.",
      image: service1
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes to maintain the highest standards.",
      image: service2
    },
    {
      title: "Logistics Solutions",
      description: "Comprehensive logistics and distribution services for global reach.",
      image: service3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 font-glancyr">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg font-inter">
            Comprehensive solutions for your global business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3 font-glancyr">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;