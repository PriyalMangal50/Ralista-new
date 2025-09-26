import service1 from "@/assets/a1.png";
import service2 from "@/assets/a2.png";
import service3 from "@/assets/a3.png";
import service4 from "@/assets/a4.png";
import service5 from "@/assets/a5.png";
import service6 from "@/assets/a6.png";
import service7 from "@/assets/a7.png";

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
      image: service5
    },
    {
      title: "Textile & Apparel",
      image: service6
    },
    {
      title: "Construction Materials",
      image: service7
    }
  ];

  return (
    <section className="py-20" style={{backgroundColor: '#ffffff'}}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4 font-glancyr" style={{color: '#233362'}}>
            What We Offer
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-80">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/1 flex items-end">
                <div className="bg-[#233362] text-white p-4 m-4 rounded-lg w-full">
                  <h3 className="text-lg font-glancyr">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 7th box below center */}
        <div className="flex justify-center mt-8 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-80">
            <img 
              src={services[6].image} 
              alt={services[6].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/1 flex items-end">
              <div className="bg-[#233362] text-white p-4 m-4 rounded-lg w-full">
                <h3 className="text-lg font-glancyr">
                  {services[6].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;