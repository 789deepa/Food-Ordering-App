const MenuItem = ({ title, price, desc }) => {
    return (
        <div className="m-3 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition">
            <h4 className=" m-0 font-medium text-gray-800">
                {title} - ₹{price}
            </h4>
            <p className=" m-1 text-sm text-gray-600">{desc}</p>
        </div>
    );
};

export default MenuItem;