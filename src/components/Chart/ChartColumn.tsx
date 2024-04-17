import { BarChart } from "@mui/x-charts";

export default function MyChart() {
  <BarChart
    xAxis={[
      {
        id: "barCategories",
        data: ["bar A", "bar B", "bar C"],
        scaleType: "band",
      },
    ]}
    series={[
      {
        data: [2, 5, 3],
      },
    ]}
    width={100}
    height={100}
  />;
}
