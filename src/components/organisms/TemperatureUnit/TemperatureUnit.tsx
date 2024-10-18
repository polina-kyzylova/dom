import React, { useState } from "react";
import * as S from "./styled";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../core/hooks/hooks";
import {
  changeTemperMode,
  TemperMode,
} from "../../../core/store/slices/HomeSlice";
import { Title } from "../../../global";
import Termometer from "../../molecules/Termometer";

export default function TemperatureUnit() {
  const mode = useAppSelector((state) => state.home.temper_mode);
  const [selectedValue, setSelectedValue] = useState<TemperMode>(mode);
  const dispatch = useDispatch();

  const handleChange = (value: TemperMode) => {
    setSelectedValue(value);
    dispatch(
      changeTemperMode({
        temper_mode: value,
      })
    );
  };

  const checkMode = (currentMode: TemperMode): boolean => {
    if (selectedValue === currentMode) return true;
    else return false;
  };

  return (
    <S.TemperCard>
      <Title alignSelf="center" fontSize="small">
        Heating
      </Title>

      <Termometer />

      <S.TemperCard>
        <p>Mode</p>

        <S.ModeGroup>
          <S.Container>
            <S.TemperButton
              id="auto"
              checked={checkMode(TemperMode.auto)}
              onClick={() => handleChange(TemperMode.auto)}
            >
              <S.AutoIcon checked={checkMode(TemperMode.auto)} />
            </S.TemperButton>
            <S.ModeLabel checked={checkMode(TemperMode.auto)} htmlFor="auto">
              Auto
            </S.ModeLabel>
          </S.Container>

          <S.Container>
            <S.TemperButton
              id="custom"
              checked={checkMode(TemperMode.custom)}
              onClick={() => handleChange(TemperMode.custom)}
            >
              <S.CustomIcon checked={checkMode(TemperMode.custom)} />
            </S.TemperButton>
            <S.ModeLabel
              checked={checkMode(TemperMode.custom)}
              htmlFor="custom"
            >
              Custom
            </S.ModeLabel>
          </S.Container>

          <S.Container>
            <S.TemperButton
              id="off"
              checked={checkMode(TemperMode.off)}
              onClick={() => handleChange(TemperMode.off)}
            >
              <S.OffIcon checked={checkMode(TemperMode.off)} />
            </S.TemperButton>

            <S.ModeLabel checked={checkMode(TemperMode.off)} htmlFor="off">
              Off
            </S.ModeLabel>
          </S.Container>
        </S.ModeGroup>
      </S.TemperCard>
    </S.TemperCard>
  );
}

/*
      <GaugeChart
        id="1"
        nrOfLevels={1}
        arcsLength={[1]}
        colors={["green"]}
        cornerRadius={3}
        textColor={"transparent"}
        needleColor={"transparent"}
        needleBaseColor={"transparent"}
        arcWidth={0.1}
      />
*/

/*

      <GaugeChart
        id='1'
        nrOfLevels={3}
        arcsLength={[0.25, 0.5, 0.25]}
        colors={["#2d74da", "#1f57a4", "#25467a"]}
        arcPadding={0.02}
        percent={percent}
        textColor={"#000000"}
        needleColor={"#5392ff"}
        formatTextValue={(value: any) => value}
      />
*/
