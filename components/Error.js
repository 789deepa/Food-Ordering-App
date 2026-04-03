import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="min-h-screen flex justify-center items-center bg-brand-dark">
            <div className="max-w-md text-center animate-slideUp">
                <h1 className="text-6xl font-bold text-brand-accent mb-4">Oops!!</h1>
                <h2 className="text-3xl font-semibold text-brand-text mb-3">Something went wrong!</h2>
                <h3 className="text-lg text-brand-text-secondary mb-8">{err.status} : {err.statusText}</h3>
                <button className="bg-brand-accent text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent-light shadow-card hover:shadow-elevated transition-all duration-200">
                  ← Go Back
                </button>
            </div>
        </div>
    )
}

export default Error ;