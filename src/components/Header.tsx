import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background text-brand-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="text-2xl font-bold font-glancyr text-brand-dark">NetGrit</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-brand-lime transition-colors font-linear-grotesk">Home</a>
            <div className="relative group">
              <button className="flex items-center hover:text-brand-lime transition-colors font-linear-grotesk">
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#product1" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Product 1</a>
                  <a href="#product2" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Product 2</a>
                  <a href="#product3" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Product 3</a>
                </div>
              </div>
            </div>
            <a href="#industries" className="hover:text-brand-lime transition-colors font-linear-grotesk">Industries</a>
          </nav>
          
          <Button variant="default" className="bg-brand-lime text-brand-dark hover:bg-brand-lime/90 font-medium font-linear-grotesk">
            Get an Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;