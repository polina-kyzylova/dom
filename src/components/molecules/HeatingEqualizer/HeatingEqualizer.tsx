import React, { useState } from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { theme } from "../../../core/theme/index";
import Equalizer from "../Equalizer";
import Divider from "@mui/material/Divider";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import * as S from "./styled";

export default function HeatingEqualizer() {
  // Инициализация состояния с массивом значений
  const [items, setItems] = useState([9, 21, 15, 7]);

  // Функция для изменения элемента массива
  const updateItem = (index: number, newValue: number) => {
    const updatedItems = items.map((item, i) =>
      i === index ? newValue : item
    );
    setItems(updatedItems);
  };

  return (
    <S.Wrapper>
      <S.ScaleContainer>
        <S.Scale>
          <LightModeIcon />
          <BedtimeIcon />
        </S.Scale>
        <Divider />
        <S.Scale>
          <p>6 AM</p>
          <p>12 PM</p>
          <p>6 PM</p>
          <p>12 AM</p>
        </S.Scale>
      </S.ScaleContainer>

      <S.Container>
        <S.Sliders>
          {items.map((item, index) => {
            return (
              <Equalizer
                key={index}
                index={index}
                value={item}
                changeValue={updateItem}
              />
            );
          })}
        </S.Sliders>

        <S.Chart>
          <SparkLineChart
            data={items}
            curve="natural"
            yAxis={{
              min: 0,
              max: 40,
            }}
            colors={[theme.colors.lightYellow]}
          />
        </S.Chart>
      </S.Container>
    </S.Wrapper>
  );
}
