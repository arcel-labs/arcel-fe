import { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { CHART_CONFIG } from "./config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Desempenho escolar",
    },
  },
};

const labels = ["Q1", "Q2", "Q3"];

export const data = {
  labels,
  datasets: [
    {
      label: "Matemática",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 14 })),
      backgroundColor: CHART_CONFIG.math.background,
    },
    {
      label: "Potuguês",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 14 })),
      backgroundColor: CHART_CONFIG.portugues.background,
    },
  ],
};

const ChartsComponent = () => {
  return <Bar options={options} data={data} />;
}

export default ChartsComponent;
