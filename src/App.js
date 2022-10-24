import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ interval: "", from: "", to: "" });

  const ticker = "SPUS"

  const getChartData = async () => {
    setLoading(true);

    await axios.get(`https://query1.finance.yahoo.com/v7/finance/download/${ticker}?period1=${formData.from}&period2=${formData.to}&interval=${formData.interval}&events=history`)
      .then(({ data }) => {
        console.log({ data });
        setChartData(data);
      })
      .catch(error => {
        console.log({ error })
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useLayoutEffect(() => {
    getChartData()
  }, []);

  const intervalOptions = [
    { value: "1d", label: "1 Day" },
    { value: "1wk", label: "1 Week" },
    { value: "1mo", label: "1 Month" },
  ];

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(current => ({ ...current, [name]: value }))
  };

  const onSubmit = e => {
    e.preventDefault();

    getChartData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={onSubmit}>
          <div>
            <label>
              {("Interval")}
            </label>

            <select name="interval" value={formData.interval} onChange={onChange}>
              {intervalOptions.map(({ value, label }, i) => (
                <option key={i} value={value} label={label} />
              ))}
            </select>
          </div>

          <div>
            <label>
              {("Date Range")}
            </label>

            <label>
              {("From")}
            </label>
            <input
              type="date"
              name="from"
              value={formData.from}
              onChange={onChange}
            />

            <label>
              {("To")}
            </label>
            <input
              type="date"
              name="to"
              value={formData.to}
              onChange={onChange}
            />
          </div>

          <button type="submit" disabled={loading}>
            {("Get Data")}
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
