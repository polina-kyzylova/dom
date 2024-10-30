import React from "react";
import GaugeChart from "react-gauge-chart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import styled from "styled-components";
import { theme } from "../../core/theme/index";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const OuterGaugeContainer = styled.div`
  width: 90%;
  height: 80%;
  position: absolute;
  z-index: 5;
  top: 0;
`;

const InnerGaugeContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
`;

export interface ITermometer {
  value: number;
}

export default function Termometer({ value }: ITermometer) {
  return (
    <Container>
      <OuterGaugeContainer>
        <Gauge
          value={value}
          startAngle={-90}
          endAngle={90}
          innerRadius="90%"
          cornerRadius="40%"
          sx={() => ({
            [`& .${gaugeClasses.valueArc}`]: {
              fill: theme.colors.lightYellow,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.colors.gray,
            },
          })}
          text={""}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        />
      </OuterGaugeContainer>
      <InnerGaugeContainer>
        <GaugeChart
          id="gauge-chart1"
          nrOfLevels={25}
          percent={value / 100}
          textColor={"#000000"}
          arcPadding={0.07}
          cornerRadius={0}
          arcWidth={0.2}
          formatTextValue={() => `${value}°C`}
          needleColor={theme.colors.disabled}
          needleBaseColor={"#33333"}
          colors={["black"]}
          animate={false}
        />
      </InnerGaugeContainer>
    </Container>
  );
}
