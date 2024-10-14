import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-family: "Kosmos";
  font-size: 3rem;
  font-weight: 200;
`;

export default function OnboardingPage() {
  return (
    <PageContainer>
      <MainTitle>dom</MainTitle>
      <p>Hi there</p>
    </PageContainer>
  );
}
