import React from 'react';
import './Coin.css'

const CoinHead = () => {
    return (
        <div className="coin-row">
            <div className="coin">
                <h1>Currency</h1>
            </div>
            <div className="coin-data">
                <p className="coin-price">Price</p>
                <p className="coin-volume">Volume</p>
                <p className="coin-marketcap">Market cap</p>
            </div>
        </div>
    );
};

export default CoinHead;