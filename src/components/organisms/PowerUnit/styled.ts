import styled from "styled-components";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { theme } from "../../../core/theme/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

export interface ITabButton {
  selected: true | false;
}

export const TabBtn = styled.button<ITabButton>`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  color: ${({ selected }) => (selected ? "black" : "white")};
  cursor: pointer;
  padding: 10px 12px;
  margin: 6px;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${({ selected }) =>
    selected ? theme.colors.lightGray : "transparent"};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? theme.colors.lightGray : theme.colors.disabled};
  }
`;

export const TabsList = styled(BaseTabsList)`
  background-color: ${theme.colors.gray};
  border-radius: 25px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
