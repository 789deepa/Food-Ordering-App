const Shimmer = () => {
    return (
        <div className="px-10 py-12 bg-brand-dark min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div className="h-8 w-64 bg-brand-darker animate-pulse rounded-lg"></div>
                <div className="h-6 w-32 bg-brand-darker animate-pulse rounded-lg"></div>
            </div>
            <div className="grid gap-6" style={{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))"}}>
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-brand-card rounded-2xl border border-brand-border overflow-hidden shadow-card">
                        <div className="h-40 bg-brand-darker animate-pulse"></div>
                        <div className="px-4 pt-4 pb-4">
                            <div className="h-5 w-3/4 bg-brand-darker animate-pulse rounded-md mb-3"></div>
                            <div className="h-4 w-1/2 bg-brand-darker animate-pulse rounded-md mb-3"></div>
                            <div className="h-4 w-2/3 bg-brand-darker animate-pulse rounded-md mb-2"></div>
                            <div className="flex gap-2 mt-3">
                                <div className="h-6 w-16 bg-brand-darker animate-pulse rounded-md"></div>
                                <div className="h-6 w-16 bg-brand-darker animate-pulse rounded-md"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shimmer;