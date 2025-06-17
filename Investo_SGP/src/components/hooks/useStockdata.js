import { useState, useEffect } from 'react';
import axios from 'axios';

const useStockData = (symbol) => {
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStockData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=WF31WFDA5T8CB29Q`);
                setStockData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                setLoading(false);
            }
        };

        fetchStockData();
    }, [symbol]);

    return { stockData, loading };
};

export default useStockData;
