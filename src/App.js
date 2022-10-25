import axios from "axios";
import { useLayoutEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import chartTestData from "./testData";

export default function App() {
  const [chartData, setChartData] = useState(chartTestData);
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

  const series = [
    {
      name: "candle",
      data: chartData
    }
  ];

  const options = {
    // chart: {
    //   type: "candlestick"
    // },
    // xaxis: {
    //   type: "category",
    //   //tickPlacement: "between",
    // },
    // yaxis: {
    //   legend: {
    //     title: "dan"
    //   }
    // },
  };

  return (
    <div className="text-center min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <h5 className="my-3 navbar-brand mx-4">
          {("Yahoo Finance Data")}
        </h5>

        <div className="collapse navbar-collapse mx-4">
          <div className="row align-items-center my-2">
            <div className="col-8">
              <input
                className="form-control w-100"
                type="search"
                placeholder="Search"
              />
            </div>

            <div className="col-4">
              <button className="btn btn-outline-light w-100" type="button">Search</button>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-light d-flex justify-content-center align-items-center">
        <div className="col-10">

          <div className="row mt-5 justify-content-around">
            <div className="col-lg-5">
              <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={350}
              />
            </div>

            <div className="col-lg-5">
              <form onSubmit={onSubmit}>
                <div className="form-group my-2">
                  <label>
                    {("Interval")}
                  </label>

                  <select
                    name="interval"
                    placeholder="Interval"
                    value={formData.interval}
                    onChange={onChange}
                    className="form-control"
                  >
                    {intervalOptions.map(({ value, label }, i) => (
                      <option key={i} value={value} label={label} />
                    ))}
                  </select>
                </div>

                <div className="row my-2">
                  <label>
                    {("Date Range")}
                  </label>

                  <div className="col">
                    <label>
                      {("From")}
                    </label>

                    <input
                      type="date"
                      name="from"
                      placeholder="From"
                      value={formData.from}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                    <label>
                      {("To")}
                    </label>

                    <input
                      type="date"
                      name="to"
                      placeholder="To"
                      value={formData.to}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="btn btn-success my-2 w-100">
                  {("Get Data")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <footer className="bg-dark text-center text-white position-absolute bottom-0 w-100">
        <div className="text-center p-3">
          {new Date().getFullYear()} {("Copyright © ")}
          <a className="text-white" href="https://suahib.dev" target="_blank" rel="noreferrer">Suhaib Ahmad</a>
        </div>
      </footer>
    </div>
  );
}
