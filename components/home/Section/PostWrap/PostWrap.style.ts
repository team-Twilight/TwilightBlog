import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const Wrap = styled.div`
  flex: 1;
  display: flex;
  min-width: 570px;
  flex-direction: column;
  align-self: stretch;
`;

export const WrapTitle = styled.p`
  ${TextStyle}
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  font-variant: small-caps;

  color: #000000;

  box-sizing: border-box;

  border-bottom: 3px solid #000000;
`;
