import styled from "styled-components";
import { theme } from "../../../core/theme/index";

import AutoModeIcon from "@mui/icons-material/AutoMode";
import BackHandIcon from "@mui/icons-material/BackHand";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const TemperCard = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr 1fr min-content;
  gap: 1rem;
`;

export const Mode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export interface IChecked {
  checked: boolean;
}

export const ModeLabel = styled.label<IChecked>`
  color: ${(props) => (props.checked ? "black" : theme.colors.disabled)};
  cursor: pointer;
`;

export const TemperButton = styled.button<IChecked>`
  background-color: ${(props) =>
    props.checked ? theme.colors.lightYellow : theme.colors.gray};

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5rem;
`;

export const AutoIcon = styled(AutoModeIcon)<IChecked>`
  color: ${(props) => (props.checked ? "black" : "white")};
`;

export const CustomIcon = styled(BackHandIcon)<IChecked>`
  color: ${(props) => (props.checked ? "black" : "white")};
`;

export const OffIcon = styled(PowerSettingsNewIcon)<IChecked>`
  color: ${(props) => (props.checked ? "black" : "white")};
`;

export const ModeGroup = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
