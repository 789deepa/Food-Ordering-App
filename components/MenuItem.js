const MenuItem = ({ title, price, desc }) => {
    return (
        <div className="m-3 border border-brand-border bg-brand-card rounded-lg px-4 py-3 hover:border-brand-accent hover:shadow-hover hover:bg-brand-darker transition-all duration-200 group cursor-pointer">
            <h4 className="m-0 font-semibold text-brand-text text-[15px] group-hover:text-brand-accent transition-colors">
                {title} <span className="text-brand-accent">- ₹{price}</span>
            </h4>
            <p className="m-1 text-sm text-brand-text-secondary group-hover:text-brand-text transition-colors">{desc}</p>
        </div>
    );
};

export default MenuItem;