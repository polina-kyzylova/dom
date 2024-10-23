import React, { useState } from "react";
import styled from "styled-components";
import * as S from "../../global";
import MainTitle from "../molecules/MainTitle";
import HomeItem from "../molecules/HomeItem";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useAppSelector } from "../../core/hooks/hooks";
import BaseModal from "../molecules/BaseModal";
import CreateHomeForm from "../organisms/CreateHomeForm";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function OnboardingPage() {
  const homeList = useAppSelector((state) => state.homeList);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.PageContainer>
      <MainTitle alignSelf="center" fontSize="large"/>
      <Tooltip title="Add new home">
        <S.BaseButton color="primary" onClick={() => handleClickOpen()}>
          <AddIcon />
        </S.BaseButton>
      </Tooltip>

      <HomeContainer>
        {homeList.map((item) => (
          <HomeItem
            key={item.home_id}
            home_title={item.home_title}
            address={item.address}
            home_type={item.home_type}
            home_id={item.home_id}
          />
        ))}
      </HomeContainer>

      <BaseModal open={open} handleClose={handleClose} title="Create new home">
        <CreateHomeForm handleClose={handleClose} />
      </BaseModal>
    </S.PageContainer>
  );
}
