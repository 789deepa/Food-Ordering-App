const MenuItem = ({ title, price, desc }) => {
    return (
        <div className="m-3 border border-[#E8E6E1] bg-white rounded-lg px-4 py-3 hover:shadow-md hover:border-[#FF8C42] transition duration-200">
            <h4 className="m-0 font-medium text-[#1a1a1a] text-[15px]">
                {title} - ₹{price}
            </h4>
            <p className="m-1 text-sm text-[#666666]">{desc}</p>
        </div>
    );
};

export default MenuItem;