const ProductCategoriesSection = () => {
  return (
    <section className="py-16" style={{backgroundColor: '#F1F5EB'}}>
      <div className="container mx-auto px-4">
        <div className="bg-[#233362] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#233362] p-6 rounded-lg">
              <h3 className="text-[#D0F500] text-xl font-bold mb-4 font-glancyr">Skin Care</h3>
              <ul className="text-white text-sm space-y-2 font-linear-grotesk">
                <li>Creams: Deep hydration, all-body use Moisturizer: Daily hydration lock Body Oil: Quick - absorbing, non-greasy Serum: Targeted treatments petroleum Jelly: Multi-purpose protectant</li>
              </ul>
            </div>
            
            <div className="bg-[#233362] p-6 rounded-lg">
              <h3 className="text-[#D0F500] text-xl font-bold mb-4 font-glancyr">Body Cleansing</h3>
              <ul className="text-white text-sm space-y-2 font-linear-grotesk">
                <li>Shampoo: Vitamin-enriched, gentle cleansing Body Wash: Mild, moisturizing formulas Soap Bars & Shower Gel: Multiple formulations</li>
              </ul>
            </div>
            
            <div className="bg-[#233362] p-6 rounded-lg">
              <h3 className="text-[#D0F500] text-xl font-bold mb-4 font-glancyr">Oral Care</h3>
              <ul className="text-white text-sm space-y-2 font-linear-grotesk">
                <li>Toothpaste: Whitening, fluoride, herbal options Mouth Wash: Alcohol-free, antibacterial</li>
              </ul>
            </div>
            
            <div className="bg-[#233362] p-6 rounded-lg">
              <h3 className="text-[#D0F500] text-xl font-bold mb-4 font-glancyr">Specialty</h3>
              <ul className="text-white text-sm space-y-2 font-linear-grotesk">
                <li>OTC Products: Minor skin concerns, pain relief Guest Amenities: Travel-sized essentials</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <img 
            src="/lovable-uploads/1071d504-b1c6-491d-bf2a-7bed34c7857f.png" 
            alt="Product Categories" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;