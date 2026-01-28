const RestoCard = ({resData}) => {
    const { name, description, rating, deliveryTime} = resData;
    return (
        <div className="bg-gray-100 border border-gray-200 rounded-xl shadow-sm
hover:shadow-lg hover:-translate-y-1 transition 
 ">
            <img className="w-full h-40 object-cover rounded-lg" alt="Saffron Route" src="/img/food.jpg" />
            <h3 className="text-gray-900 font-semibold text-lg px-3">{name}</h3>  
            <h4 className="text-gray-600 text-sm leading-relaxed">{description} </h4>
            <h4 className="text-gray-500 text-medium">⭐{rating}</h4>
            <h4 className="text-gray-500 text-sm">{deliveryTime} </h4>
        </div>
    );
};

export default RestoCard;