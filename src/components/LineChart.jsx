import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Flex } from "@chakra-ui/react";
dayjs.extend(customParseFormat);

//ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function createGradient(ctx, area) {
  const colorEnd = "rgba(255, 84, 3, 0.2)";
  const colorMid = "rgba(255, 84, 3, 0.2)";
  const colorStart = "rgba(255, 84, 3, 0)";

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

function LineChart({ data }) {
  const datafun = (dates, views) => ({
    labels: dates,
    datasets: [
      {
        data: views,
        fill: true,
        borderWidth: "0",
        pointBackgroundColor: "transparent",
        borderColor: "#FF5403",
      },
    ],
  });

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const dates = Object.keys(data.graph_data.views).map((date) => {
    const formatted = dayjs(date, "YYYY-MM-DD").format("D MMM");
    return formatted;
  });

  const views = Object.values(data.graph_data.views).map((value) => {
    return value * 10;
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...datafun(dates, views),
      datasets: datafun(dates, views).datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return !data ? (
    <>loading</>
  ) : (
    <Flex justify={"center"}>
      <Line
        ref={chartRef}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              weight: false,
              grid: {
                display: false,
              },
            },
            y: {
              weight: false,
              border: {
                display: false,
              },
              ticks: {
                stepSize: 200,
                crossAlign: "far",
              },
              grid: {
                drawTicks: false,
              },
            },
          },
        }}
        data={chartData}
      />
    </Flex>
  );
}

export default LineChart;
