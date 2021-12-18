import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import Coin from './Coin'

function App() {
  const [coins, setCoins] = useState([])

const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const fetchData = async() => {
  const response = await axios.get(apiURL)
  setCoins(response.data)
  console.log(response.data)
  //setInterval(fetchData, 5000);
}

  return (
    <div className="App">
      <h1>Cryptocurrency Tracker</h1>

      {/* Fetch Data from API button */}
      <div>
        <h2>Fetch data from API</h2>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
      </div>

      {/* display data from API */}
      <div className="crypto-coins">
        {/* iterate through data */}
        {coins && coins.map((coin, index) => {
          
          return (
              <Coin 
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.market_cap}
                marketcap={coin.total_volume}
                market_cap_rank={coin.market_cap_rank}
                priceChange={coin.price_change_percentage_24h}

              />
          );
        })}
      </div>


    </div>


  );
}

export default App;