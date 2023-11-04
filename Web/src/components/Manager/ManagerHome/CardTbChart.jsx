import React, { useEffect, useRef, useState } from "react";
import { Line, getElementsAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const CardTbChart = () => {
  const [time, setTime] = useState("week");
  const [thuNhap, setThuNhap] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loiNhuan, setLoiNhuan] = useState([]);
  const [views, setViews] = useState([]);

  useEffect(() => {
    updateData(time);
  }, []);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    updateData(selectedTime);
  };

  const updateData = (selectedTime) => {
    switch (selectedTime) {
      case "week":
        setThuNhap([40000, 90000, 20000, 70000, 10000, 50000, 50000]);
        setLoiNhuan([4000, 9000, 2000, 7000, 1000, 5000, 5000]);
        setViews([400, 900, 200, 700, 100, 500, 500]);
        setLabels(["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"]);
        break;
      case "month":
        setThuNhap([
          900000, 400000, 700000, 400000, 200000, 500000, 800000, 900000,
          400000, 700000, 400000, 200000,
        ]);
        setLoiNhuan([
          90000, 40000, 70000, 40000, 20000, 50000, 80000, 90000, 40000, 70000,
          40000, 20000,
        ]);
        setViews([
          4000, 9000, 2000, 7000, 1000, 5000, 5000, 4000, 9000, 2000, 7000,
          1000,
        ]);
        setLabels([
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]);
        break;
      case "year":
        setThuNhap([4000000, 9000000, 2000000, 7000000, 1000000]);
        setLoiNhuan([400000, 900000, 200000, 700000, 100000]);
        setViews([40000, 90000, 20000, 70000, 10000]);
        setLabels([2019, 2020, 2021, 2022, 2023]);
        break;
      default:
        break;
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Thu nhập",
        data: thuNhap,
        borderColor: "aqua",
        backgroundColor: "aqua",
        tension: 0.3,
      },

      {
        label: "Lợi nhuận",
        data: loiNhuan,
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.3,
      },

      {
        label: "Views",
        data: views,
        borderColor: "green",
        backgroundColor: "green",
        tension: 0.3,
      },
    ],
  };

  return (
    <>
      <div style={{display: 'grid', placeItems: 'end', padding: "10px"}} className="select-menu">
        <select style={{background: 'hsl(217, 61%, 21%)', color: 'hsl(0, 0%, 83%)', border: 'none', borderRadius: '5px', padding: '5px'}} onChange={handleTimeChange}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div style={{ width: "100%", padding: "20px" }}>
        <Line data={data}></Line>
      </div>
    </>
  );
};

export default CardTbChart;
