import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [btc, setBtc] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => 
      response.json()
  ).then((json) => {
    setCoins(json);
    setLoading(false);
  });
  }, []);
  const onChange = (event) => setMoney(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(money === 0 || money === "") {
      return;
    }
    const price = document.getElementById("coinList").value;
    setBtc((price / money).toFixed(2));
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> 
      : (
        <div>
          <select id="coinList">
            {coins.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
            )}
          </select>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} text="number" placeholder='input your money' />
            <button>Calculate BTC</button>
          </form>
          {btc ? <div>{`${btc} BTC`}</div> : null}
        </div>
      )}
      
    </div>
  );
}

export default App;
