import React, { useEffect, useState } from "react";
import * as G from "../../../global";
import * as S from "./styled";
import { BarChart } from "@mui/x-charts/BarChart";
import { theme } from "../../../core/theme/index";
import { BaseTabBtn } from "../../../global";
import { Tabs } from '@mui/base/Tabs';

interface IDataItem {
  itemX: string;
  amount: number;
}

export default function PowerUnit() {
  const [period, setPeriod] = useState<"Week" | "Month" | "Year">("Week");
  const [dataset, setDataset] = useState([{}]);
  const weekLabels = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  const monthLabels = [
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
  ];

  const randomGenerator = (index: number): number => {
    return Math.floor(Math.random() * index) + index / 10;
  };

  const showPower = (
    current: number,
    labelsArray: string[],
    random: number
  ) => {
    let data: IDataItem[] = [];

    labelsArray.forEach((item, index) => {
      let amount = current > index ? randomGenerator(random) : 0;
      data.push({ itemX: item, amount: amount });
    });

    return data;
  };

  useEffect(() => {
    let currentDay = new Date();
    if (period === "Week") {
      let result = showPower(currentDay.getDay(), weekLabels, 100);
      setDataset(result);
    }
    if (period === "Month") {
      let monthLabels = [];
      for (let i = 0; i <= 31; i++) {
        monthLabels.push(`${i}`);
      }
      let result = showPower(currentDay.getDate() + 1, monthLabels, 300);
      setDataset(result);
    }
    if (period === "Year") {
      let result = showPower(currentDay.getMonth() + 1, monthLabels, 1000);
      setDataset(result);
    }
  }, [period]);

  return (
    <S.Container>
      <S.Header>
        <G.Title fontSize="small">Energy (kwh)</G.Title>

        <Tabs>
          <S.TabsList>
            <BaseTabBtn
              selected={period === "Week"}
              onClick={() => setPeriod("Week")}
            >
              Week
            </BaseTabBtn>
            <BaseTabBtn
              selected={period === "Month"}
              onClick={() => setPeriod("Month")}
            >
              Month
            </BaseTabBtn>
            <BaseTabBtn
              selected={period === "Year"}
              onClick={() => setPeriod("Year")}
            >
              Year
            </BaseTabBtn>
          </S.TabsList>
        </Tabs>
      </S.Header>

      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "itemX",
            tickLabelStyle: { fontSize: "1rem" },
          },
        ]}
        yAxis={[{ tickLabelStyle: { fontSize: "1rem" } }]}
        series={[
          {
            dataKey: "amount",
            label: "Energy consumption:",
            valueFormatter: (v) => (v === null ? "" : `${v} kwh`),
          },
        ]}
        grid={{ horizontal: true }}
        borderRadius={15}
        colors={[theme.colors.lightYellow]}
<<<<<<< HEAD
        //skipAnimation={true}
=======
        skipAnimation={true}
>>>>>>> master
        slotProps={{ legend: { hidden: true } }}
      />
    </S.Container>
  );
}
