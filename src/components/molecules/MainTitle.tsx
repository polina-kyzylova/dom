import React from "react";
import styled from "styled-components";
import { TitleVariant } from "../../global";

const StyledH1 = styled.h1<TitleVariant>`
  align-self: ${({ alignSelf = "auto" }) => alignSelf};
  font-size: ${({ fontSize }) =>
    fontSize === "large" ? "3rem" : fontSize === "small" ? "2rem" : "1rem"};
  font-family: "Kosmos";
  font-weight: 200;
`;

export default function MainTitle({ alignSelf, fontSize }: TitleVariant) {
  return (
    <StyledH1 alignSelf={alignSelf} fontSize={fontSize}>
      dom
    </StyledH1>
  );
}
