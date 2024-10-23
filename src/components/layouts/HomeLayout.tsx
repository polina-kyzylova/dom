import React from "react";
import styled from "styled-components";
import TemperatureUnit from "../organisms/TemperatureUnit/TemperatureUnit";
import PowerUnit from "../organisms/PowerUnit/PowerUnit";
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
        <TemperatureUnit />
      </ColumnItem>
      <ColumnItem>Hi 2</ColumnItem>
      <RowItem>
        <PowerUnit />
      </RowItem>
      <Item>
        <p>Security control</p>
      </Item>
      <Item>
        <p>Smart devices</p>
      </Item>
      <Item>
        <p>Communal services</p>
      </Item>
    </LayoutContainer>
  );
}
