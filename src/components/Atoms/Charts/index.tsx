import { memo } from "react";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_CONFIG } from "./config";

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Desempenho escolar",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Matemática",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: CHART_CONFIG.math.background,
      backgroundColor: CHART_CONFIG.math.border,
    },
    {
      fill: true,
      label: "Português",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: CHART_CONFIG.portugues.border,
      backgroundColor: CHART_CONFIG.portugues.background,
    },
    {
      fill: true,
      label: "Física",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: CHART_CONFIG.physics.border,
      backgroundColor: CHART_CONFIG.physics.background,
    },
  ],
};

const ChartsComponent = () => {
  return <Line options={options} data={data} height={130} className="text-cyan-400" />;
};

export default memo(ChartsComponent);
