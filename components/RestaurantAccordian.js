import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantAccordion = ({ restaurant }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="space-y-4">
            {/* {Menu } */}
            <div>
                <button
                    onClick={() => toggleSection("menu")}
                    className="w-full border border-[#E8E6E1] bg-white rounded flex justify-between p-3 font-semibold text-[#1a1a1a] hover:bg-[#FAFAFA] transition">
                    Menu
                    <span>{openSection === "menu" ? "▲" : "▼" }</span>
                </button>
                {openSection === "menu" && (
                    <div className="mt-3">
                        <MenuList menu={restaurant.menu} />
                    </div>
                )}                    
            </div>
            {/* {offers }  */}
            <div>
                <button 
                onClick={() => toggleSection("offers")}
                className="w-full border border-[#E8E6E1] bg-white rounded flex justify-between p-3 font-semibold text-[#1a1a1a] hover:bg-[#FAFAFA] transition"
                >
                    Offers
                    <span> {openSection === "offers" ? "▲" : "▼" }</span>
                </button>
                
                {openSection === "offers" && (
                    <div>
                        {restaurant.offers?.map((offer, i) => (
                            <div key={i} className="mt-3 border border-[#E8E6E1] bg-[#FAFAFA] rounded p-3">
                            <h4 className="font-medium text-[#1a1a1a]">{offer.title}</h4>
                            <p className="text-sm text-[#666666]">{offer.desc}</p>
                            </div>
                        ))}
                        {restaurant.offers?.length === 0 && (
                            <p className="text-sm text-[#999999]">No offers available</p>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default RestaurantAccordion;