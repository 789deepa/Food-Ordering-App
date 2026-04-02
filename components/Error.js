import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#FAFAFA]">
            <div className="max-w-md text-center">
                <h1 className="text-4xl font-bold text-[#FF6B35] mb-4">Oops!!</h1>
                <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-2">Something went wrong!</h2>
                <h3 className="text-lg text-[#666666] mb-6">{err.status} : {err.statusText}</h3>
                <button className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#FF8C42] transition">Try Again!</button>
            </div>
        </div>
    )
}

export default Error ;