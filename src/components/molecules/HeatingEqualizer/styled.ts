import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8%;
`;

export const Container = styled.div`
  height: 60%;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Chart = styled.div`
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  position: absolute;
  bottom: 2rem;
  z-index: 3;
`;

export const Sliders = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScaleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Scale = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.8rem;
`;
