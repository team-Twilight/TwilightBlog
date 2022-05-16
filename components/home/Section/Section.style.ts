import styled from "@emotion/styled";
import { css } from "@emotion/react";

`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
font-variant: small-caps;

color: #000000;
`

export const SectionContainer = styled.div`
  max-width: 1036px;
  margin: 40px auto 0;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const SectionTitle = styled.p`
  box-sizing: border-box;
  width: 100%;
  height: 28px;

  border-bottom: 3px solid #000000;
`;