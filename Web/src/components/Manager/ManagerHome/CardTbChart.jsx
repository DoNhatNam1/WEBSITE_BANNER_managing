import React, { useEffect, useRef, useState } from "react";
import { Line, getElementsAtEvent } from "react-chartjs-2";
import { Context } from "../../../context/Context";
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
  const { clickLogList, setClickLogList } = React.useContext(Context);

  const [time, setTime] = useState("week");
  const [thuNhap, setThuNhap] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loiNhuan, setLoiNhuan] = useState([]);
  const [views, setViews] = useState([]);


  useEffect(() => {
    updateData(time);
  }, []);

  React.useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      const currentDate = new Date(); // Lấy ngày hiện tại
      const currentYear = currentDate.getFullYear(); // Lấy năm hiện tại
      const currentMonth = currentDate.getMonth() + 1; // Lấy tháng hiện tại (tháng bắt đầu từ 0)
      const currentDay = currentDate.getDay(); // Lấy ngày hiện tại (0 là Chủ nhật, 1 là Thứ 2, ..., 6 là Thứ 7)

      const Monday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 1 
        );
      });
      const Tuesday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 2 
        );
      });
      const Wednesday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 3 
        );
      });
      const Thursday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 4 
        );
      });
      const Friday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 5 
        );
      });
      const Saturday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 6 
        );
      });
      const Sunday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 0 
        );
      });

      setViews([Monday.length, Tuesday.length, Wednesday.length, Thursday.length, Friday.length, Saturday.length, Sunday.length]);
    }
    return () => {
      isCancelled = true;
    };
  }, [clickLogList]);


  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    updateData(selectedTime);
  };


  const updateData = (selectedTime) => {
    const currentDate = new Date(); // Lấy ngày hiện tại
      const currentYear = currentDate.getFullYear(); // Lấy năm hiện tại
      const currentMonth = currentDate.getMonth() + 1; // Lấy tháng hiện tại (tháng bắt đầu từ 0)
      const currentDay = currentDate.getDay(); // Lấy ngày hiện tại (0 là Chủ nhật, 1 là Thứ 2, ..., 6 là Thứ 7)
    switch (selectedTime) {
      case "week":
        setThuNhap([40000, 90000, 20000, 70000, 10000, 50000, 50000]);
        setLoiNhuan([4000, 9000, 2000, 7000, 1000, 5000, 5000]);
      
      const Monday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 1 
        );
      });
      const Tuesday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 2 
        );
      });
      const Wednesday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 3 
        );
      });
      const Thursday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 4 
        );
      });
      const Friday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 5 
        );
      });
      const Saturday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 6 
        );
      });
      const Sunday = clickLogList.filter((item) => {
        let clickDate = new Date(item.ClickHistory);
        let clickYear = clickDate.getFullYear();
        let clickMonth = clickDate.getMonth() + 1;
        let clickDay = clickDate.getDay();

        return (
          clickYear === currentYear &&
          clickMonth === currentMonth &&
          clickDay === 0 
        );
      });
        setViews([Monday.length, Tuesday.length, Wednesday.length, Thursday.length, Friday.length, Saturday.length, Sunday.length]);
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
  
        const January = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 1
          );
        });
        const February = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 2
          );
        });
        const March = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 3
          );
        });
        const April = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 4
          );
        });
        const May = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 5
          );
        });
        const June = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 6
          );
        });
        const July = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 7
          );
        });
        const August = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 8
          );
        });
        const September = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 9
          );
        });
        const October = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 10
          );
        });
        const November = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 11
          );
        });
        const December = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
          let clickMonth = clickDate.getMonth() + 1;
  
          return (
            clickYear === currentYear &&
            clickMonth === 12
          );
        });
        setViews([
          January.length, 
          February.length, 
          March.length, 
          April.length, 
          May.length, 
          June.length, 
          July.length, 
          August.length, 
          September.length, 
          October.length, 
          November.length,
          December.length,
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
        const year2019 = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
  
          return (
            clickYear === 2019
          );
        });
        const year2020 = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
  
          return (
            clickYear === 2020
          );
        });
        const year2021 = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
  
          return (
            clickYear === 2021
          );
        });
        const year2022 = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
  
          return (
            clickYear === 2022
          );
        });
        const year2023 = clickLogList.filter((item) => {
          let clickDate = new Date(item.ClickHistory);
          let clickYear = clickDate.getFullYear();
  
          return (
            clickYear === 2023
          );
        });
        setViews([year2019.length, year2020.length, year2021.length, year2022.length, year2023.length]);
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
      <div
        style={{ display: "grid", placeItems: "end", padding: "10px" }}
        className="select-menu">
        <select
          style={{
            background: "hsl(217, 61%, 21%)",
            color: "hsl(0, 0%, 83%)",
            border: "none",
            borderRadius: "5px",
            padding: "5px",
          }}
          onChange={handleTimeChange}>
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
