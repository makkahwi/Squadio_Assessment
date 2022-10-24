import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [chartData, setChartData] = useState([]);

  const ticker = "SPUS"
  const from_timestamp = new Date("2022-01-01")
  const to_timestamp = new Date()
  const interval = "1mo"

  const getData = async () => {
    await axios.get(`https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${from_timestamp}&period2=${to_timestamp}&interval=${interval}&events=history`)
      .then(({ data }) => {
        console.log({ data });
        setChartData(data);
      })
      .catch(error => {
        console.log({ error })
      });
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
