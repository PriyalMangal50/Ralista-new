import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/image.png"; // adjust the path as needed

const Header = () => {
  return (
    <header className="bg-background text-brand-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-brand-lime transition-colors font-linear-grotesk">Home</a>
            <div className="relative group">
              <button className="flex items-center hover:text-brand-lime transition-colors font-linear-grotesk">
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/products1" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Personal Care Products</a>
                  <a href="/products2" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Industrial Products</a>
                  <a href="/products3" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Specialty Products</a>
                  <a href="/products4" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Camping and Outdoor</a>
                  <a href="/products5" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Packaging Products</a>
                  <a href="/products6" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Wet Wipes</a>
                  <a href="/products7" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Cleaning Solutions</a>
                </div>
              </div>
            </div>
            <a href="/industries" className="hover:text-brand-lime transition-colors font-linear-grotesk">Industries</a>
            <a href="/contact" className="hover:text-brand-lime transition-colors font-linear-grotesk">Contact</a>

          </nav>

          <button className="bg-transparent text-brand-dark border-2 border-brand-dark px-6 py-3 rounded-full font-linear-grotesk hover:bg-brand-dark hover:text-white transition-colors">
            Get an Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
