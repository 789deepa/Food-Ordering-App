const RestoCard = ({resData}) => {
    const { name, description, rating, deliveryTime, cuisine, imageId} = resData;

    let ratingBgClass = "bg-red-950 text-red-400";
    if (rating >= 4.0) {
        ratingBgClass = "bg-green-950 text-green-400";
    } else if (rating >= 3.5) {
        ratingBgClass = "bg-orange-950 text-orange-400";
    }

    const cuisineTags = cuisine ? cuisine.split(",").map(c => c.trim()).slice(0, 3) : [];

    return (
        <div className="bg-brand-card rounded-2xl border border-brand-border overflow-hidden cursor-pointer hover:border-brand-accent hover:-translate-y-2 hover:shadow-hover transition-all duration-300 group">
            <div className="relative h-40 bg-brand-darker overflow-hidden">
                <img className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" alt={name} src={imageId} onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                }} />
                <div className="w-full h-full flex-col items-center justify-center gap-2 bg-brand-darker" style={{display:"none"}}>
                    <span className="text-3xl opacity-20">🍽️</span>
                    <span className="text-xs text-brand-text-secondary">Image coming soon</span>
                </div>
            </div>
            <div className="px-4 pt-4 pb-4">
                <h3 className="text-[15px] font-semibold text-brand-text mb-2 truncate group-hover:text-brand-accent transition-colors duration-200">{name}</h3>
                <div className={`text-[13px] font-semibold px-2 py-1 rounded-md inline-block mb-3 ${ratingBgClass}`}>
                    ★ {rating}
                </div>
                <p className="text-[12px] text-brand-text-secondary mb-3 line-clamp-2">{deliveryTime}</p>
                {cuisineTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {cuisineTags.map((tag, idx) => (
                            <span key={idx} className="text-[11px] text-brand-text-secondary bg-brand-darker border border-brand-border px-2 py-1 rounded-md hover:border-brand-accent hover:text-brand-accent transition-all duration-200">
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
                <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-brand-accent text-brand-dark text-[11px] font-bold tracking-wider shadow-elevated">
                    PROMOTED
                </div>
                <RestoCard {...props} />
            </div>
        )
    }
}

export default RestoCard;