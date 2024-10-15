import React from "react";
import styled from "styled-components";
import * as S from "../../global";
import MainTitle from "../molecules/MainTitle";
import HomeItem from "../molecules/HomeItem";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useAppSelector } from "../../core/hooks/hooks";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  gap: 1rem;
`;

export default function OnboardingPage() {
  const homeList = useAppSelector((state) => state.homeList);

  return (
    <S.PageContainer>
      <MainTitle />
      <Tooltip title="Add new home">
        <S.BaseButton onClick={() => console.log("Heeeeyy")}>
          <AddIcon></AddIcon>
        </S.BaseButton>
      </Tooltip>

      <HomeContainer>
        {homeList.map((item) => (
          <HomeItem
            home_title={item.home_title}
            address={item.address}
            home_type={item.home_type}
            home_id={item.home_id}
          />
        ))}
      </HomeContainer>
    </S.PageContainer>
  );
}
