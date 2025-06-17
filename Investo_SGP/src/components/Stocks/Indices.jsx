import React from 'react';
import useStockData from '../hooks/useStockdata';
import './Indices.css';

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const StockBlock = ({ symbol }) => {
    const { stockData, loading } = useStockData(symbol);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!stockData || !stockData['Time Series (5min)']) {
        return <p>No data available</p>;
    }

    const stockDataForCurrentDateTime = stockData['Time Series (5min)'][getCurrentDateTime()];

    if (!stockDataForCurrentDateTime) {
        return <p>No data available for current time</p>;
    }

    const currentPrice = stockDataForCurrentDateTime['4. close'];

    return (
        <>
            <div className="Stoke_Indices">
                <div className="Stoke_Indices_">
                    <div className="Stoke_Indices_name">{symbol}</div>
                    <div className="Stoke_Indices_price">{currentPrice}</div>
                </div>
            </div>
        </>
    );
};

export default StockBlock;
