import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from "axios";

// Đăng ký các thành phần cần thiết với Chart.js
Chart.register(CategoryScale, LinearScale, BarElement);

const Spend = () => {
  // Khởi tạo trạng thái cho dữ liệu biểu đồ và tổng số tiền
  const [chartData, setChartData] = useState({
    labels: [], // Danh sách các nhãn của biểu đồ
    datasets: [
      {
        data: [], // Dữ liệu cho biểu đồ
        backgroundColor: [], // Màu nền cho các cột
        label: "Amount" // Nhãn của biểu đồ
      }
    ]
  });
  const [totalAmount, setTotalAmount] = useState(0); // Tổng số tiền chi tiêu

  useEffect(() => {
    // Hàm để lấy dữ liệu từ API
    const fetchData = async () => {
      try {
        // Gửi yêu cầu GET tới API
        const response = await axios.get("http://localhost:3000/spending"); // Địa chỉ API của bạn
        const data = response.data;

        // Nhóm dữ liệu theo category_spend_name và tính tổng amount cho mỗi nhóm
        const groupedData = data.reduce((acc, cur) => {
          if (!acc[cur.category_spend_name]) {
            acc[cur.category_spend_name] = 0; // Khởi tạo giá trị nếu chưa có
          }
          acc[cur.category_spend_name] += cur.amount; // Cộng dồn số tiền
          return acc;
        }, {});

        // Chuyển đổi dữ liệu nhóm thành mảng để dùng cho biểu đồ
        const labels = Object.keys(groupedData); // Danh sách các danh mục
        const amounts = Object.values(groupedData); // Tổng số tiền cho từng danh mục

        // Tính tổng giá trị amount
        const total = amounts.reduce((acc, cur) => acc + cur, 0);
        setTotalAmount(total); // Cập nhật tổng số tiền

        // Tạo màu nền cho các cột
        const backgroundColor = labels.map((_, index) => {
          const colors = ["blue", "red", "orange", "green", "purple", "yellow"]; // Các màu sắc
          return colors[index % colors.length]; // Chọn màu cho mỗi cột
        });

        // Cập nhật dữ liệu biểu đồ
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
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData(); // Gọi hàm để lấy dữ liệu khi component được render
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 500, height: 300 }}>
        <Bar data={chartData} /> {/* Hiển thị biểu đồ cột */}
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-2xl font-bold">Khoản chi phí:</span>
        <span className="font-normal mt-1.5 ml-1">${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span> {/* Hiển thị tổng số tiền */}
      </div>
    </div>
  );
};

export default Spend;
