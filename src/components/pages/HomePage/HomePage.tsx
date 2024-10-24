import React from "react";
import { Title } from "../../../global";
import * as S from "./styled";
import MainTitle from "../../molecules/MainTitle";
import { Tabs } from "@mui/base/Tabs";
import WestIcon from "@mui/icons-material/West";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderActions from "../../molecules/HeaderActions";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Tabs defaultValue={0}>
      <S.Container>
        <S.HomeHeader>
          <WestIcon
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
            fontSize="large"
          />
          <S.TabsList>
            <S.Tab value={0}>Home</S.Tab>
            <S.Tab value={1}>Parking</S.Tab>
            <S.Tab value={2}>Garden</S.Tab>
          </S.TabsList>

          <MainTitle fontSize="small" />
        </S.HomeHeader>

        <S.HomeHeader>
          <div>
            <Title>My Title</Title>
            <p>my address</p>
          </div>

          <HeaderActions />
        </S.HomeHeader>

        <Outlet />
      </S.Container>
    </Tabs>
  );
}
