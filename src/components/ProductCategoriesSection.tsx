const ProductCategoriesSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-[#233362] rounded-2xl p-4"> {/* reduced from p-16 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* reduced gap-6 to gap-4 */}
            <div className="bg-[#233362] p-1 rounded-lg"> {/* reduced p-6 to p-4 */}
              <h3 className="text-[#D0F500] text-3xl mb-3 font-glancyr">
                Skin Care
              </h3>
              <ul className="text-white text-base space-y-1 font-linear-grotesk"> {/* reduced space-y-2 to space-y-1 */}
                <li>
Creams: All-body use, deep hydration formula
               </li>
                <li>Moisturizer: Locks in daily skin hydration
 </li>
 <li>
  Body Oil: Non-greasy, absorbs into skin fast
 </li>
<li>Petroleum Jelly: Protective, multipurpose solution</li>
              </ul>
            </div>

            <div className="bg-[#233362] p-1 rounded-lg">
              <h3 className="text-[#D0F500] text-3xl mb-3 font-glancyr">
                Body Cleansing
              </h3>
              <ul className="text-white text-base space-y-1 font-linear-grotesk">
                <li>
                  Shampoo: Gentle cleansing with added vitamins



                </li>
                Body Wash: Moisturizing blend for daily care

                <li>

Soap Bars: Variety of textures and ingredients

                </li>
                <li>
Shower Gel: Refreshing cleanse, long-lasting scent

                </li>
                <li>

                </li>
              </ul>
            </div>

            <div className="bg-[#233362] p-1 rounded-lg">
              <h3 className="text-[#D0F500] text-3xl mb-3 font-glancyr">
                Oral Care
              </h3>
              <ul className="text-white text-base space-y-1 font-linear-grotesk">
                <li>
                  Toothpaste: Whitening, fluoride, and herbal blend


                </li>
                <li>

Mouth Wash: Antibacterial, alcohol-free freshness


                </li>
                <li>Toothbrush: Soft bristles for gentle cleaning
</li>
<li>
Tongue Cleaner: Helps maintain fresh breath

</li>
              </ul>
            </div>

            <div className="bg-[#233362] p-1 rounded-lg">
              <h3 className="text-[#D0F500] text-3xl mb-3 font-glancyr">
                Specialty
              </h3>
              <ul className="text-white text-base space-y-1 font-linear-grotesk">
                <li>
                  
                </li>OTC Products: Relief for minor skin concerns

                <li>

Guest Amenities: Compact, travel-ready essentials


                </li>
                <li>
Baby Care: Gentle formulas for delicate skin

                </li>
                <li>
                  
Men’s Grooming: Beard, hair, and body products
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
