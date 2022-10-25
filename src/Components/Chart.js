import ReactApexChart from "react-apexcharts";

export default function Chart({ data }) {
  const options = {
    chart: {
      type: "candlestick"
    },
    xaxis: {
      type: "category",
      //tickPlacement: "between",
    },
    yaxis: {
      legend: {
        title: "dan"
      }
    },
  };

  const series = [
    {
      name: "candle",
      data: data
    }
  ];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </>
  );
}
