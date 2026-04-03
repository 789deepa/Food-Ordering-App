const RestaurantHeader = ({ name }) => {
    return (
        <div className="mb-8 pb-6 border-b border-brand-border animate-slideUp">
            <h1 className="text-4xl font-bold text-brand-text mb-2" style={{fontFamily:"'Playfair Display',serif"}}>{name}</h1>
            <p className="text-brand-text-secondary text-sm">Premium dining experience</p>
        </div>
    )
}

export default RestaurantHeader;