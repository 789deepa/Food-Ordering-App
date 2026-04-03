import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantAccordion = ({ restaurant }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="space-y-4 mt-8">
            {/* {Menu } */}
            <div>
                <button
                    onClick={() => toggleSection("menu")}
                    className="w-full border-2 border-brand-border bg-brand-card rounded-xl flex justify-between p-4 font-semibold text-brand-text hover:border-brand-accent hover:bg-brand-darker transition-all duration-200 group">
                    <span className="group-hover:text-brand-accent transition-colors">Menu</span>
                    <span className="text-brand-accent group-hover:scale-110 transition-transform">{openSection === "menu" ? "▲" : "▼" }</span>
                </button>
                {openSection === "menu" && (
                    <div className="mt-4 animate-slideUp">
                        <MenuList menu={restaurant.menu} />
                    </div>
                )}
            </div>
            {/* {offers }  */}
            <div>
                <button
                onClick={() => toggleSection("offers")}
                className="w-full border-2 border-brand-border bg-brand-card rounded-xl flex justify-between p-4 font-semibold text-brand-text hover:border-brand-accent hover:bg-brand-darker transition-all duration-200 group"
                >
                    <span className="group-hover:text-brand-accent transition-colors">Offers</span>
                    <span className="text-brand-accent group-hover:scale-110 transition-transform"> {openSection === "offers" ? "▲" : "▼" }</span>
                </button>

                {openSection === "offers" && (
                    <div className="animate-slideUp">
                        {restaurant.offers?.map((offer, i) => (
                            <div key={i} className="mt-3 border border-brand-border bg-brand-darker rounded-lg p-4 hover:border-brand-accent transition-all duration-200">
                            <h4 className="font-semibold text-brand-text text-sm">{offer.title}</h4>
                            <p className="text-sm text-brand-text-secondary mt-1">{offer.desc}</p>
                            </div>
                        ))}
                        {restaurant.offers?.length === 0 && (
                            <p className="text-sm text-brand-text-secondary mt-3">No offers available</p>
                            )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantAccordion;