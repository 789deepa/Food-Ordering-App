import {useState, useEffect} from "react";

const useOnline = () => {
    
    const [onStatus, setOnStatus] = useState(true);

    

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnStatus(false);
        });

        window.addEventListener("online", () => {
            setOnStatus(true);
        });
    }, []);

    return onStatus;
}

export default useOnline;