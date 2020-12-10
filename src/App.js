import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin';
import CoinHead from './CoinHead';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log('Error occured!', error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <div className='coin-app'>
      <div className="coin-search">
        <h1 className="coin-text"> Search currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder='Search' onChange={handleChange} />
        </form>
      </div>
      <CoinHead />
      {filteredCoins.map(coin => {
        return (
          <div>
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
