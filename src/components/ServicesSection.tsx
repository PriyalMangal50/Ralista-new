import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Personal Care & Hygiene Products",
      image: service1
    },
    {
      title: "Outdoor & HORECA Supplies",
      image: service2
    },
    {
      title: "Pet Products",
      image: service3
    },
    {
      title: "Engineering & Precision Components",
      image: service4
    },
    {
      title: "Packaging Solutions",
      image: service1
    },
    {
      title: "Textile & Apparel",
      image: service2
    },
    {
      title: "Construction Materials",
      image: service3
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-glancyr" style={{color: 'black'}}>
            What We Offer
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-80">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="bg-[#233362] text-white p-4 m-4 rounded-lg w-full">
                  <h3 className="text-lg font-semibold font-glancyr">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 7th box below 5th position */}
        <div className="flex justify-center mt-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-6 justify-items-center">
            <div className="lg:col-start-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-80">
                <img 
                  src={services[6].image} 
                  alt={services[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="bg-[#233362] text-white p-4 m-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold font-glancyr">
                      {services[6].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;