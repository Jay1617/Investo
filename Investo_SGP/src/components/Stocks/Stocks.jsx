import React from "react";
import "./Stocks.css";
import Indices from "./Indices";

function Stocks() {
  return (
    <div className="Dashboard_Stocks">
      <div className="Stocks_message">
        <h2>MARKET IS OPEN BETWEEN 9:15 AM TO 3:30PM</h2>
      </div>

      <div className="Stocks_indices">
        <div className="Stocks_indices_h2">
          <p>Stocks</p>
        </div>
        <hr />
        <div className="Stocks_indices_">
          <Indices symbol="AAPL" />
          <Indices symbol="GOOGL" />
          <Indices symbol="MSFT" />
        </div>
      </div>

      <div className="allStocks_indices">
        <div className="allStocks_indices_h2">
          <p>Largecap Stocks</p>
        </div>
        <hr />
        <div className="allStocks_indices_">
          <Indices symbol="AAPL" />
          <Indices symbol="GOOGL" />
          <Indices symbol="MSFT" />
        </div>
      </div>

      <div className="allStocks_indices">
        <div className="allStocks_indices_h2">
          <p>Midcap Stocks</p>
        </div>
        <hr />
        <div className="allStocks_indices_">
          <Indices symbol="AAPL" />
          <Indices symbol="GOOGL" />
          <Indices symbol="MSFT" />
        </div>
      </div>

      <div className="allStocks_indices">
        <div className="allStocks_indices_h2">
          <p>Smallcap Stocks</p>
        </div>
        <hr />
        <div className="allStocks_indices_">
          <Indices symbol="AAPL" />
          <Indices symbol="GOOGL" />
          <Indices symbol="MSFT" />
        </div>
      </div>
    </div>
  );
}

export default Stocks;
