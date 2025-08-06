import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import heroBg from "@/assets/ralista-2.jpeg";
import personalCareImg from "@/assets/products.png";
import aimg from "@/assets/a1.png"; // adjust the path as needed
const Products5 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4 py-8">
          <div 
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroBg})`}}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-16 mt-24">
                <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">
                  Products
                </h1>
                <p className="text-lg font-linear-grotesk text-gray-300">
                  Home &gt; Products &gt; Personal Care &amp; Hygiene Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F1F5EB' }}>
  <div className="container mx-auto px-4 mr-4">
    <div className="flex flex-col lg:flex-row items-start gap-12">
      
      <div className="lg:w-[85%] max-w-[800px]">
        <h2 className="text-4xl lg:text-5xl mb-6 font-glancyr text-[#233362] leading-tight">
          Head to Toe Personal Care Products
        </h2>

        <h3 className="text-3xl font-semibold mb-6 font-linear-grotesk text-[#233362] leading-snug">
          Elevate Everyday Care with Thoughtfully Crafted Essentials
        </h3>

        <p className="text-xl font-linear-grotesk text-[#233362] leading-relaxed">
          From morning routines to nighttime rituals, your body deserves care that goes beyond the basics. Our head-to-toe personal care collection is built around real needs—hydration, hygiene, nourishment, and refreshment. Each product is formulated with quality ingredients and practical convenience in mind, helping you feel confident and cared for, every day.
        </p>
      </div>

      <div className="lg:w-[45%] flex justify-center self-start">
        <img
          src={personalCareImg}
          alt="Personal Care Products"
          className="max-w-xs w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>



      <section className="py-16 pb-32" style={{ backgroundColor: '#F1F5EB' }}>
  <div className="container mx-auto px-4">
    <div className="rounded-2xl p-8">
      <h2 className="text-4xl lg:text-5xl mb-6 font-glancyr text-[#233362]">Why?</h2>
      <p className="text-lg font-linear-grotesk text-[#233362] leading-relaxed">
We offer a diverse range of personal care products, from essential skincare items like cleansers and moisturizers to specialized toiletries that cater to specific preferences and concerns. Our commitment to quality is reflected in every step of our process, with all products manufactured under stringent quality control standards to ensure safety and effectiveness. Whether you're a retail customer, a bulk buyer, or looking for OEM/private labeling solutions, we provide flexible packaging and branding options to suit your needs. With our personal care range, you can feel confident, cared for, and ready to face each day with freshness and vitality      </p>
    </div>

    {/* Image + Blue Box */}
    <div className="relative flex mt-12">
      {/* Blue Box Positioned Over Image and Beyond */}
      <div className="absolute top-[25%] left-0 w-full px-4 z-10">
        <div className="max-w-6xl mx-auto h-[380px] overflow-hidden rounded-[1rem] bg-[#233362] text-white shadow-lg">
          <ProductCategoriesSection />
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-[30%] relative z-0 ml-4 translate-x-2">
        <img
          src={aimg}
          alt="Personal Care Products"
          className="max-w-[90%] w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Products5;
