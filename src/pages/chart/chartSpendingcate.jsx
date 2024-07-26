import { myData } from "./data";
import React from "react";
import { Bar, Pie} from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function App1() {
  const [chartData] = React.useState({
    labels: myData.map(function (i) {
      return i.year;
    }),
    datasets: [
      {
        data: myData.map(function (i) {
          return i.covidcases;
        }),
        backgroundColor: ["blue"],
        label: "Covid cases"
      }
    ]
  });
  return (
    <div style={{ width: 500, height: 300 , display:"flex"}}>
      <Bar data={chartData} />
      {/* <Pie data={chartData} /> */}
    </div>
  );
}

export default App1;
