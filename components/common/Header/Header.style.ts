import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  height: 82px;
  max-width: calc(100% - calc((100% - 1036px)));
  margin: 0 auto;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  
  position: fixed;
  width: 100%;
  height: 82px;
  left: 0;
  top: 0;

  background: #6c5ce7;
  border-bottom: 3px solid #000000;
  z-index: 10;
`;
