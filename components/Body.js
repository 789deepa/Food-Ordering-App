const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* resto cards */}
                 {   resList.map((restaurant) => (
                        <RestoCard resData={restaurant} />
                    ))}                 
            </div>
        </div>
    );
};

export default Body; 