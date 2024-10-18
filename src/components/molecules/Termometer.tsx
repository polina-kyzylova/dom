import React from "react";
import GaugeChart from "react-gauge-chart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import styled from "styled-components";
import { theme } from "../../core/theme/index";

const Container = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  //border: 1px solid red;
`;

const OuterGaugeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 8%;
  left: 0;
  z-index: 5;
`;

const InnerGaugeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 0;
  z-index: 4;
`;

export default function Termometer() {
  return (
    <Container>
      <OuterGaugeContainer>
        <Gauge
          width={390}
          height={270}
          value={60}
          startAngle={-90}
          endAngle={90}
          innerRadius="90%"
          cornerRadius="40%"
          sx={() => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: theme.colors.lightYellow,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.colors.gray,
            },
          })}
          text={""}
        />
      </OuterGaugeContainer>
      <InnerGaugeContainer>
        <GaugeChart
          id="gauge-chart1"
          nrOfLevels={25}
          percent={0.8}
          textColor={"#000000"}
          arcPadding={0.07}
          cornerRadius={0}
          arcWidth={0.2}
          formatTextValue={(value) => `${value}°C`}
          needleColor={theme.colors.disabled}
          needleBaseColor={"#33333"}
          colors={["black"]}
        />
      </InnerGaugeContainer>
    </Container>
  );
}
