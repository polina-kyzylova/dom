import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../core/theme/index";
import { Title } from "../../global";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CustomButton = styled.button`
  outline: none;
  border: none;
  background-color: ${theme.colors.lightYellow};
  padding: 0.4rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
`;

export default function TemperModeButtons() {
  const [targetTemper, setTargetTemper] = useState(21);

  return (
    <Container>
      <p>Target temperature</p>
      <Group>
        <CustomButton onClick={() => setTargetTemper(targetTemper - 1)}>
          -
        </CustomButton>
        <Title>{targetTemper}°C</Title>
        <CustomButton onClick={() => setTargetTemper(targetTemper + 1)}>
          +
        </CustomButton>
      </Group>
    </Container>
  );
}
