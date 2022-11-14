type TchartColors = {
  border: string;
  background: string;
};

export type TChartConfig = {
  math: TchartColors;
  portugues: TchartColors;
  physics: TchartColors;
};

export const CHART_CONFIG: TChartConfig = {
  math: {
    background: "#00e67680",
    border: "#69f0ae80",
  },
  physics: {
    background: "#d81b6080",
    border: "#e91e6380",
  },
  portugues: {
    background: "#039be580",
    border: "#0288d180",
  },
};
