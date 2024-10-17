import styled from "styled-components";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { theme } from "../../../core/theme/index";

export const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  height: 100%;
`;

export const TabsList = styled(BaseTabsList)`
  width: 40vw;
  background-color: ${theme.colors.lightGray};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled(BaseTab)`
  color: ${theme.colors.disabled};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.gray};
  }

  &.${tabClasses.selected} {
    background-color: ${theme.colors.lightRed};
    color: black;
  }
`;

export const HomeHeader = styled.div`
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
