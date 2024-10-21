import React from "react";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import { theme } from "../../core/theme/index";

const Container = styled.div`
  width: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export interface IEqualizerProps {
  index: number;
  value: number;
  changeValue: (index: number, newValue: number) => void;
}

export default function Equalizer({
  index,
  value,
  changeValue,
}: IEqualizerProps) {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    changeValue(index, newValue as number);
  };

  function valuetext(x: number) {
    return `${x}°C`;
  }

  return (
    <Container>
      <Slider
        id="morning"
        orientation="vertical"
        step={2}
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        max={40}
        sx={{ color: theme.colors.disabled }}
      />
      <label htmlFor="morning">{valuetext(value)}</label>
    </Container>
  );
}
