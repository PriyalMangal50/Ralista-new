import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-4">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <form className="space-y-3">
            <Input 
              placeholder="First Name" 
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
            <Input 
              placeholder="Last Name" 
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
            <Input 
              placeholder="Email Address" 
              type="email"
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
            <Input 
              placeholder="Phone Number" 
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
          </form>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-4 text-center">
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