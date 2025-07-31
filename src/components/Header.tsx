import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold font-glancyr">NetGrit</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-brand-lime transition-colors font-inter">Home</a>
            <a href="#about" className="hover:text-brand-lime transition-colors font-inter">About Us</a>
            <a href="#services" className="hover:text-brand-lime transition-colors font-inter">Services</a>
            <a href="#industries" className="hover:text-brand-lime transition-colors font-inter">Industries</a>
            <a href="#contact" className="hover:text-brand-lime transition-colors font-inter">Contact</a>
          </nav>
          
          <Button variant="default" className="bg-brand-lime text-brand-dark hover:bg-brand-lime/90 font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;