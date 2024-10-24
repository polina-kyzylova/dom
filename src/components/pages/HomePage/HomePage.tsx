import React from "react";
import { Title } from "../../../global";
import * as S from "./styled";
import MainTitle from "../../molecules/MainTitle";
import WestIcon from "@mui/icons-material/West";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderActions from "../../molecules/HeaderActions";
import { useLocation } from "react-router-dom";
import { Tabs } from "@mui/base/Tabs";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  let item = location.pathname.split("/").pop();

  return (
    <S.Container>
      <S.HomeItem>
        <WestIcon
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
          fontSize="large"
        />

        <Tabs>
          <S.TabsList>
            <S.TabBtn
              selected={item !== "parking" && item !== "garden"}
              onClick={() => navigate("")}
            >
              Home
            </S.TabBtn>
            <S.TabBtn
              selected={item === "parking"}
              onClick={() => navigate("./parking")}
            >
              Parking
            </S.TabBtn>
            <S.TabBtn
              selected={item === "garden"}
              onClick={() => navigate("./garden")}
            >
              Garden
            </S.TabBtn>
          </S.TabsList>
        </Tabs>

        <MainTitle fontSize="small" />
      </S.HomeItem>

      <S.HomeItem>
        <div>
          <Title>My Title</Title>
          <p>my address</p>
        </div>

        <HeaderActions />
      </S.HomeItem>

      <Outlet />
    </S.Container>
  );
}
