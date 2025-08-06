import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import footerBg from "@/assets/footer.png";
import logo from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer
      className="text-white py-8 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container mx-auto px-4 relative z-10">

        {/* Top Section: Logo + Info + Slogan */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-6">
          {/* Left: Logo + Description */}
          <div className="lg:w-2/3 w-full">
            <div className="mb-0.5">
              <img
                src={logo}
                alt="Company Logo"
                className="w-30 h-12 object-cover rounded-lg"
              />
            </div>
            
          </div>

          {/* Right: Slogan */}
          <div className="lg:w-2/3 w-full lg:text-right mt-2">
  <p className="text-2xl lg:text-3xl text-gray-200 font-linear-grotesk">
    Your trusted partner for global sourcing.
  </p>
</div>

        </div>
        <div className="border-t border-white/20 pt-8"></div>

{/* Description + Contact Form Side by Side */}
<div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
  {/* Left: Description */}
  <div className="lg:w-1/2 w-full">
    <p className="text-xl font-linear-grotesk text-white leading-relaxed">
      Ralista Source Pro LLP delivers dependable sourcing, OEM solutions, and global distribution across a diverse product range. With 20+ years of cross-border expertise, we bring speed, quality, and reliability to your supply chain.
    </p>
  </div>

  {/* Right: Contact Form */}
  <div className="lg:w-1/2 w-full">
    <div className="">
      <form className="space-y-4">
        {["First Name", "Last Name", "Email Address", "Phone Number"].map((placeholder, idx) => (
          <div key={idx} className="flex items-center gap-3">
            
            <Input
              placeholder={placeholder}
              type={placeholder === "Email Address" ? "email" : "text"}
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 flex-1 text-sm"
              
            />
            <div className="w-6 h-6 bg-brand-lime rounded-full shadow-lg shadow-brand-lime/50"></div>
          </div>
        ))}
      </form>
    </div>
  </div>
</div>

        

        {/* Footer Links */}
        <div className="border-t border-white/20 pt-4 text-center">
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-white hover:text-brand-lime transition-colors font-inter">Home</a>
            <a href="#" className="text-white hover:text-brand-lime transition-colors font-inter">Products</a>
            <a href="#" className="text-white hover:text-brand-lime transition-colors font-inter">Industries</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

