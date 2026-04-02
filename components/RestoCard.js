const RestoCard = ({resData}) => {
    const { name, description, rating, deliveryTime, cuisine, imageId} = resData;
    
    let ratingBgClass = "bg-red-100 text-red-700";
    if (rating >= 4.0) {
        ratingBgClass = "bg-green-100 text-green-700";
    } else if (rating >= 3.5) {
        ratingBgClass = "bg-amber-100 text-amber-700";
    }

    const cuisineTags = cuisine ? cuisine.split(",").map(c => c.trim()).slice(0, 3) : [];

    return (
        <div className="bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,53,0.15)] transition-all duration-150">
            <div className="relative h-40 bg-[#F5F5F5]">
                <img className="w-full h-full object-cover opacity-90" alt={name} src={imageId} onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                }} /> 
                <div className="w-full h-full flex-col items-center justify-center gap-2 bg-[#F5F5F5]" style={{display:"none"}}>
                    <span className="text-3xl opacity-20">🍽️</span>
                    <span className="text-xs text-[#999999]">Image coming soon</span>
                </div>
            </div>
            <div className="px-4 pt-3 pb-4">
                <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-2 truncate">{name}</h3>
                <div className={`text-[13px] font-semibold px-2 py-0.5 rounded-md inline-block mb-2 ${ratingBgClass}`}>
                    ★ {rating}
                </div>
                <h4 className="text-[13px] text-[#999999] mb-2">{deliveryTime}</h4>
                {cuisineTags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {cuisineTags.map((tag, idx) => (
                            <span key={idx} className="text-[11px] text-[#999999] bg-[#F5F5F5] border border-[#E8E6E1] px-2 py-0.5 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestoCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-2 left-2 z-10 px-2 py-1 rounded-md bg-[#FF6B35] text-white text-[11px] font-semibold">
                    Promoted
                </div>
                <RestoCard {...props} />
            </div>
        )
    }
}

export default RestoCard;