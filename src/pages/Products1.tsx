import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Products1 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4 py-8">
          <div 
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroBg})`}}
          >
            <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
              <div className="text-left ml-8 mt-8">
                <h1 className="text-4xl lg:text-5xl font-bold font-glancyr mb-4 text-white">
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

      {/* Products Content Section */}
      <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-glancyr text-black">
                Head to Toe Personal Care Products
              </h2>
              <h3 className="text-xl lg:text-2xl font-medium mb-6 font-linear-grotesk text-black">
                Elevate Everyday Care with Thoughtfully Crafted Essentials
              </h3>
              <p className="text-lg font-linear-grotesk text-black leading-relaxed">
                From morning routines to nighttime rituals, your body deserves care that goes beyond the basics. Our head-to-toe personal care collection is built around real needs—hydration, hygiene, nourishment, and refreshment. Each product is formulated with quality ingredients and practical convenience in mind, helping you feel confident and cared for, every day.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img 
                src="/lovable-uploads/a580a994-aa6b-41af-8f26-89a0f136b28a.png" 
                alt="Personal Care Products" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 font-glancyr text-black">
              Why?
            </h2>
            <p className="text-lg font-linear-grotesk text-black leading-relaxed">
              Formulated for Daily Use – Safe, gentle ingredients for all skin and hair types. Diverse Product Range – From core skincare to specialized toiletries Trusted Quality – Manufactured under strict quality controls. Available in Retail, Bulk &amp; OEM – Flexible packaging and labeling options.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products1;