const Shimmer = () => {
    return (
        <div className="px-10 py-8">
            <div className="flex justify-between items-center mb-6">
                <div className="h-6 w-48 bg-[#E8E6E1] animate-pulse rounded-md"></div>
                <div className="h-4 w-24 bg-[#E8E6E1] animate-pulse rounded-md"></div>
            </div>
            <div className="grid gap-5" style={{gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))"}}>
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden">
                        <div className="h-40 bg-[#E8E6E1] animate-pulse"></div>
                        <div className="px-4 pt-3 pb-4">
                            <div className="h-4 w-3/4 bg-[#E8E6E1] animate-pulse rounded-md mb-3"></div>
                            <div className="h-3 w-1/2 bg-[#E8E6E1] animate-pulse rounded-md mb-2"></div>
                            <div className="h-3 w-2/3 bg-[#E8E6E1] animate-pulse rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shimmer;