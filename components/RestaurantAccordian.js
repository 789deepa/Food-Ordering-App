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
                    className="w-full border rounded flex justify-between p-2 font-semibold ">
                    Menu
                    <span>{openSection === "menu" ? "▲" : "▼" }</span>
                </button>
                {openSection === "menu" && (
                    <div className="mt-3">
                        <MenuList menu={ restaurant.menu} />
                    </div>
                )}                    
            </div>
            {/* {offers }  */}
            <div>
                <button 
                onClick={() => toggleSection("offers")}
                className="w-full border rounded flex justify-between p-2 font-semibold"
                >
                    Offers
                    <span> {openSection === "offers" ? "▲" : "▼" }</span>
                </button>
                
                {openSection === "offers" && (
                    <div>
                        {restaurant.offers?.map((offer, i) => (
                            <div key={i} className="mt-3 border border-gray-50 rounded p-2">
                            <h4 className="font-medium">{offer.title}</h4>
                            <p className="text-sm text-gray-600">{offer.desc}</p>
                            </div>
                        ))}
                        {restaurant.offers?.length === 0 && (
                            <p className="text-sm text-gray-500">No offers available</p>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default RestaurantAccordion;