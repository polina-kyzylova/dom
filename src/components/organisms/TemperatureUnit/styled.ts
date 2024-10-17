import styled from "styled-components";
import { theme } from "../../../core/theme/index";

export const TemperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
`;

export interface IRadioLabel {
  isChecked: boolean;
}

export const RadioLabel = styled.label<IRadioLabel>`
  color: ${(props) => (props.isChecked ? theme.colors.lightRed : "#a4a4a4")};
  cursor: pointer;
`;
