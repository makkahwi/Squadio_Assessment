import axios from "axios";
import { useLayoutEffect, useState } from "react";

import Chart from "../Components/Chart";
import InputForm from "../Components/InputForm";
import chartTestData from "../testData";

export default function About() {
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
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            {("Yahoo Finance Data")}
          </h1>

          <p className="col-md-8 fs-4">
            {("A React.Js-based app to call financial data provided by Yahoo API query and illustrate it in CanadleStick chart")}
          </p>

          <button className="btn btn-ghost btn-lg" type="button" href="https://squadio.com/">
            {("Requested By Squadio")}
          </button>

          <button className="btn btn-ghost btn-lg" type="button">
            {("Executed By Suhaib Ahmad")}
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>
              {("Required Task")}
            </h2>

            <p>
              {("Do this")}
            </p>

            <p>
              {("Do that")}
            </p>

            <button className="btn btn-outline-light" type="button">
              {("Github Repo")}
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>
              {("Notes")}
            </h2>

            <p>
              {("Why picked the library X for the chart...")}
            </p>

            <p>
              {("What's wrong with the app")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
