import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return; // Optionally, guard against fetching with an invalid currency code.

        setIsLoading(true);
        setError(null);

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                setData(res[currency] || {}); // Guarding in case the response does not contain the expected data.
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch currency data:", error);
                setError(error);
                setIsLoading(false);
                setData({}); // Reset data on error.
            });
    }, [currency]);

    // Optionally log the current state (for debug purposes or to check updates)
    useEffect(() => {
        console.log(data);
    }, [data]);

    return { data, isLoading, error };
}

export default useCurrencyInfo;
