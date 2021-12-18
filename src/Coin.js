import React from "react"
import './Coin.css'

function Coin({name, symbol, price, marketcap, market_cap_rank, image, priceChange, volume}) {

    return(
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )

}

// function Coin({name, symbol, price, market_cap, market_cap_rank, image}) {

//     return(
//         <div className="container">
//             <div className="coin-logo">
//                 <img src={image} alt='crypto logo'/>
//             </div>
            
//             <div className="coin">
//                 <h3>Market Cap Rank: {market_cap_rank}</h3>
//                 <h3>Name: {name}</h3>
//                 <h3>Symbol: {symbol}</h3>
//                 <h3>Price: ${price}</h3>
//                 <h3>Marketcap: {market_cap}</h3>
//             </div>
//         </div>
//     )

// }

export default Coin