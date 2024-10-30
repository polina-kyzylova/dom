import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function StatusPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10 },
            { id: 1, value: 10 },
            { id: 2, value: 10 },
            { id: 3, value: 10 },
            { id: 4, value: 10 },
            { id: 5, value: 10 },
            { id: 6, value: 10 },
            { id: 7, value: 10 },
            { id: 8, value: 10 },
            { id: 9, value: 10 },
            { id: 10, value: 10 },
            { id: 11, value: 10 },
            { id: 12, value: 10 },
            { id: 13, value: 10 },
            { id: 14, value: 10 },
            { id: 15, value: 10 },
          ],
          innerRadius: 50,
          outerRadius: 60,
          paddingAngle: 1,
          cornerRadius: 3,
        },
      ]}
      width={300}
      height={300}
      colors={['black']}
    />
  );
}
