import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products2 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="bg-[#233362] rounded-[2rem] p-8 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-8 font-glancyr">
              Products 2
            </h1>
            <p className="text-lg text-gray-300 font-linear-grotesk">
              Explore our second range of innovative products for your business needs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products2;