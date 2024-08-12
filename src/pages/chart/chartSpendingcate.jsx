import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from "axios";

// Register the required components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement);

const Spend = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        label: "Amount"
      }
    ]
  });
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Hàm lấy dữ liệu từ API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/spending"); // Địa chỉ API của bạn
        const data = response.data;

        // Nhóm dữ liệu theo category_spend_name và tính tổng amount cho mỗi nhóm
        const groupedData = data.reduce((acc, cur) => {
          if (!acc[cur.category_spend_name]) {
            acc[cur.category_spend_name] = 0;
          }
          acc[cur.category_spend_name] += cur.amount;
          return acc;
        }, {});

        // Chuyển đổi dữ liệu nhóm thành mảng để dùng cho biểu đồ
        const labels = Object.keys(groupedData);
        const amounts = Object.values(groupedData);

        // Tính tổng giá trị amount
        const total = amounts.reduce((acc, cur) => acc + cur, 0);
        setTotalAmount(total);

        // Tạo màu nền cho các cột
        const backgroundColor = labels.map((_, index) => {
          const colors = ["blue", "red", "orange", "green", "purple", "yellow"];
          return colors[index % colors.length];
        });

        setChartData({
          labels: labels,
          datasets: [
            {
              data: amounts,
              backgroundColor: backgroundColor,
              label: "Amount"
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 500, height: 300 }}>
        <Bar data={chartData} />
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-2xl font-bold">Khoản chi phí:</span>
        <span className="font-normal mt-1.5 ml-1">${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};


export default Spend;
