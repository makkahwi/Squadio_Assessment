import axios from "axios";
import { useLayoutEffect, useState } from "react";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
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
    <div className="bg-light text-center min-vh-100">
      <Header />

      <body className="bg-light d-flex justify-content-center">
        <div className="col-10">
          <div className="row mt-5 justify-content-around">
            <div className="col-lg-5">
              <Chart
                data={chartData}
              />
            </div>

            <div className="col-lg-5">
              <InputForm
                formData={formData}
                loading={loading}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </div>
  );
}
