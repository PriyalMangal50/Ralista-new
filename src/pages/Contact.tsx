import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/products2.jpeg";
import contactImg from "@/assets/contact-us.png";
import yourImage from "@/assets/products.png"; // adjust the path as needed
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-4 py-8">
          <div
            className="text-white min-h-[60vh] relative overflow-hidden rounded-[2rem] mb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="relative px-8 py-12 h-full flex items-start justify-start">
  <div className="text-left ml-16 mt-24">
    <h1 className="text-4xl lg:text-6xl font-glancyr mb-4 text-white">
      Contact Us
    </h1>
    <p className="text-lg font-linear-grotesk text-gray-300">
      Home &gt; Contact
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Contact Section with Image and Form */}
      <section className="py-16" style={{ backgroundColor: '#F1F5EB' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            
            {/* Image on the left - matches form height */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="w-full h-full flex justify-end">
                <img
                  src={contactImg}
                  alt="Contact Us"
                  className="w-full h-full max-h-[550px] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Form on the right */}
            <div className="lg:w-1/2 rounded-xl p-8 shadow-md w-full">
              <h2 className="text-3xl font-bold font-glancyr mb-2 text-[#233362]">Your Information</h2>
              <h3 className="text-xl font-semibold font-linear-grotesk mb-6 text-[#233362]">Let Us Guide You</h3>

              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-[#233362] font-medium mb-1">Your Name</label>
                    <input type="text" className="w-full bg-[#F1F5EB] px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
                  </div>
                  <div className="w-full">
                    <label className="block text-[#233362] font-medium mb-1">Your Email</label>
                    <input type="email" className="w-full bg-[#F1F5EB] px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#233362] font-medium mb-1">Your Company</label>
                  <input type="text" className="w-full bg-[#F1F5EB] px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[#233362] bg-[#F1F5EB] font-medium mb-1">Your Address</label>
                  <textarea className="w-full px-4 py-2 border bg-[#F1F5EB] border-gray-300 rounded-md focus:outline-none" rows={3}></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#D0F500] text-[#233362] font-bold py-2 px-6 rounded-md hover:opacity-90 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            

          </div>
        </div>
      </section>
      {/* Contact Info Box Centered */}
<section style={{ backgroundColor: '#F1F5EB' }} className="py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-glancyr text-[#233362] mb-12">Contact Information</h2>

    <div className="rounded-3xl shadow-lg px-8 py-10 max-w-3xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
      
      {/* Left: Contact Details */}
      <div className="flex flex-col gap-6 text-left">
        <div className="flex items-start gap-4">
          <span className="text-brand-lime text-2xl" role="img" aria-label="phone">📞</span>
          <div>
            <p className="text-gray-500 text-sm font-medium">Requesting A Call:</p>
            <p className="text-[#233362] font-semibold text-lg">0000000000</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-brand-lime text-2xl" role="img" aria-label="email">📧</span>
          <div>
            <p className="text-gray-500 text-sm font-medium">E-mail</p>
            <p className="text-[#233362] font-semibold text-lg">info@example.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-brand-lime text-2xl" role="img" aria-label="location">📍</span>
          <div>
            <p className="text-gray-500 text-sm font-medium">Location</p>
            <p className="text-[#233362] font-semibold text-lg">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum</p>
          </div>
        </div>
      </div>

      {/* Right: Image Preview */}
      <div className="w-full lg:w-[400px] h-[220px] rounded-xl overflow-hidden border border-gray-300 shadow-sm">
        <img
          src={yourImage}
          alt="Location Preview"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
};

export default Contact;
