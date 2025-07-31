import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 font-glancyr">
              Ready to expand your business globally?
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-inter">
              Let us help you connect with the right partners and unlock new opportunities in the global marketplace.
            </p>
            
            <div className="flex items-center space-x-4 text-sm font-inter">
              <span>Follow us:</span>
              <a href="#" className="hover:text-brand-lime transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-lime transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-lime transition-colors">Facebook</a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 font-glancyr">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              <textarea 
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-gray-300 resize-none"
              />
              <Button className="w-full bg-brand-lime text-brand-dark hover:bg-brand-lime/90 font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold font-glancyr mb-4 md:mb-0">NetGrit</div>
            <p className="text-gray-300 font-inter">
              © 2024 NetGrit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;