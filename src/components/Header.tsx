import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/image.png"; // adjust the path as needed

const Header = () => {
  const handleMobileMenu = () => {
    const m = document.getElementById('mobile-menu');
    if (m) m.classList.toggle('hidden');
  };
  return (
  <header className="bg-white text-brand-dark relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-10 w-auto" />
          </div>
          {/* Desktop Nav */}
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
                  <a href="/products2" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Wet Wipes & Personal Hygiene</a>
                  <a href="/products3" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">HORECA Products</a>
                  <a href="/productsotchomecare" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">OTC & Home Care Products</a>
                                    <a href="/productskitchenhomecare" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Kitchen and Home Care</a>

                  <a href="/products14" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Packaging</a>
                  <a href="/products15" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Outdoor & Construction</a>
                  <a href="/products16" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Engineering</a>
                  <a href="/products17" className="block px-4 py-2 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Textiles</a>
                </div>
              </div>
            </div>
            <a href="/industries" className="hover:text-brand-lime transition-colors font-linear-grotesk">Industries</a>
            <a href="/contact" className="hover:text-brand-lime transition-colors font-linear-grotesk">Contact</a>
          </nav>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-lime"
              aria-label="Open menu"
              onClick={handleMobileMenu}
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          <button className="bg-transparent text-brand-dark border-2 border-brand-dark px-6 py-3 rounded-full font-linear-grotesk hover:bg-brand-dark hover:text-white transition-colors hidden md:block">
            Get an Appointment
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex flex-col py-2">
            <a href="/" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Home</a>
            <span className="px-6 py-2 text-xs text-gray-400">Products</span>
            <a href="/products1" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Personal Care Products</a>
            <a href="/products2" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Wet Wipes & Personal Hygiene</a>
            <a href="/products3" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">HORECA Products</a>
            <a href="/products-otc-home-care" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">OTC & Home Care Products</a>
            <a href="/productskitchenhomecare" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Kitchen and Home Care</a>

            <a href="/products14" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Packaging</a>
            <a href="/products15" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Outdoor & Construction</a>
            <a href="/products16" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Engineering</a>
            <a href="/products17" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Textiles</a>
            <a href="/industries" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Industries</a>
            <a href="/contact" className="px-6 py-3 text-brand-dark hover:bg-gray-100 font-linear-grotesk">Contact</a>
            <button className="bg-transparent text-brand-dark border-2 border-brand-dark px-6 py-3 rounded-full font-linear-grotesk hover:bg-brand-dark hover:text-white transition-colors mt-2">
              Get an Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 