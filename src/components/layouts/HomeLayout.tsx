import React from "react";
import styled from "styled-components";
import TemperatureUnit from "../organisms/TemperatureUnit/TemperatureUnit";
import PowerUnit from "../organisms/PowerUnit/PowerUnit";
import AutomationUnit from "../organisms/AutomationUnit/AutomationUnit";
import * as S from "../../global";

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
  grid-template-rows: 8fr 2fr;
  gap: 1rem;
`;

const Item = styled.div`
  ${S.BaseCard}
  display: grid;
`;

const ColumnItem = styled(Item)`
  grid-row: span 2;
`;

const RowItem = styled(Item)`
  grid-column: span 3;
`;

export default function HomeLayout() {
  return (
    <LayoutContainer>
      <ColumnItem>
        <AutomationUnit />
      </ColumnItem>
      <ColumnItem>
        <TemperatureUnit />
      </ColumnItem>
      <RowItem>
        <PowerUnit />
      </RowItem>
      <Item>
        <p>Rooms</p>
      </Item>
      <Item>
        <p>Smart devices</p>
      </Item>
      <Item>
        <p>Payments & Documents</p>
      </Item>
    </LayoutContainer>
  );
}
