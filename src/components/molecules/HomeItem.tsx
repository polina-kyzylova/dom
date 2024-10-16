import React from "react";
import { IHomeList } from "../../core/store/slices/HomeListSlice";
import * as S from "../../global";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Pattern } from "../../assets/home_pattern.svg";
import { theme } from "../../core/theme/index";
import { HomeType } from "../../core/store/slices/HomeListSlice";


export const HomeCard = styled.div`
  ${S.BaseCard}
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.color === HomeType.house ? theme.colors.lightGreen : theme.colors.lightGray};
`;

export const StyledPattern = styled(Pattern)`
  width: 90%;
  align-self: center;
  padding-bottom: 4rem;
  path {
    fill: ${(props) =>
      props.color === HomeType.house ? theme.colors.green : theme.colors.gray};
  }
`;

export default function HomeItem({
  home_type,
  home_title,
  address,
  home_id,
}: IHomeList) {
  const navigate = useNavigate();

  return (
    <HomeCard color={home_type} onClick={() => navigate(`/home/${home_id}`)}>
      <StyledPattern color={home_type} />
      <S.Title>{home_title}</S.Title>
      <p>{address}</p>
    </HomeCard>
  );
}
