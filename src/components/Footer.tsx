import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg font-linear-grotesk text-white leading-relaxed">
              Ralista Source Pro LLP delivers dependable sourcing, OEM solutions, and global distribution across a diverse product range. With 20+ years of cross-border expertise, we bring speed, quality, and reliability to your supply chain.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <form className="space-y-4">
                <div className="flex items-center gap-3">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 flex-1"
                  />
                  <div className="w-4 h-4 bg-brand-lime rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 flex-1"
                  />
                  <div className="w-4 h-4 bg-brand-lime rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 flex-1"
                  />
                  <div className="w-4 h-4 bg-brand-lime rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <Input 
                    placeholder="Phone Number" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 flex-1"
                  />
                  <div className="w-4 h-4 bg-brand-lime rounded-full"></div>
                </div>
              </form>
            </div>
          </div>
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