import styled from "styled-components";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { theme } from "../../../core/theme/index";
import { BaseTabBtn } from "../../../global";


export const TabsList = styled(BaseTabsList)`
  width: 40vw;
  background-color: ${theme.colors.lightGray};
  border-radius: 25px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabBtn = styled(BaseTabBtn)`
  color: ${({ selected }) => (selected ? "black" : theme.colors.disabled)};
  background-color: ${({ selected }) =>
    selected ? theme.colors.lightRed : "transparent"};

  &:hover {
    background-color: ${({ selected }) =>
      selected ? theme.colors.lightRed : theme.colors.gray};
  }
`;

export const HomeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  min-height: 96vh;
  margin: 2vh;
  display: grid;
  grid-template-rows: min-content min-content auto;
  gap: 1.5rem;
`;
