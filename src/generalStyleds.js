import styled from "styled-components";
import BI_LC from "./assets/images/Background/bg__left.svg"
import BI_TR from "./assets/images/Background/bg__top-right.svg"
import BI_BR from "./assets/images/Background/bg__btm-right.svg"

export const PageContainer = styled.div`
  background-color: var(--section-bcc);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  background: 
  url(${BI_LC}) left center no-repeat,
  url(${BI_TR}) top right no-repeat, 
  url(${BI_BR}) bottom right no-repeat;

  @media (max-width: 900px) {
    padding: 50px;
  }
`;

export const Section = styled.div`
  width: 375px;
  height: 812px;
  background-color: bisque;
  background: #ffffff;
  box-shadow: 0px 0px 70px #c7cbe3;
  border-radius: 25px;
`;
