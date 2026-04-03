const Grocery = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-brand-dark">
            <div className="max-w-md text-center animate-slideUp px-6">
                <div className="text-5xl mb-4">🛒</div>
                <h2 className="text-3xl font-semibold text-brand-text mb-3" style={{fontFamily:"'Playfair Display',serif"}}>
                    We are Grocery
                </h2>
                <p className="text-brand-text-secondary text-base mb-6">
                    We have lots of fresh items and products for your daily needs.
                </p>
                <button className="bg-brand-accent text-brand-dark px-6 py-2 rounded-lg font-semibold hover:bg-brand-accent-light shadow-card hover:shadow-elevated transition-all duration-200">
                  Coming Soon
                </button>
            </div>
        </div>
    )
}

export default Grocery;