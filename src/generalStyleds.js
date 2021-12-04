import styled from "styled-components";
import BI_LC from "./assets/images/Background/bg__left.svg";
import BI_TR from "./assets/images/Background/bg__top-right.svg";
import BI_BR from "./assets/images/Background/bg__btm-right.svg";

export const PageContainer = styled.div`
  background-color: var(--section-bcc);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  background: url(${BI_LC}) left center no-repeat,
    url(${BI_TR}) top right no-repeat, url(${BI_BR}) bottom right no-repeat;

  @media (max-width: 900px) {
    padding: 50px;
  }
`;

export const Section = styled.div`
  min-width: 375px;
  height: 812px;
  background-color: bisque;
  background: #ffffff;
  box-shadow: 0px 0px 70px #c7cbe3;
  border-radius: 25px;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 48px;

  color: #000;
  width: 100%;
  text-align: start;
  margin-left: 37px;
  margin-top: 50px;
`;

export const PlateCardContainer = styled.div`
  width: 375px;
  min-height: 178px;
  position: relative;
`;

export const PlateImg = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 10px;
  z-index: 1;
`;

export const FondoMovido = styled.div`
  width: 370px;
  min-height: 152px;
  position: absolute;
  left: 31px;
  top: 18px;

  background: rgba(122, 179, 243, 0.2);
  border-radius: 20px;
`;

export const PlateNameBtn = styled.div`
  width: 158px;

  position: absolute;
  left: 170px;
  top: 42px;

  display: flex;
  flex-direction: column;
  align-items: space-around;
  gap: 16px;
`;

export const PlatePrice = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 32px;
`;

export const PlateName = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */
`;

export const AddBtn = styled.button`
  width: 130px;
  height: 32px;

  background: #6b00f5;
  border-radius: 20px;
  border: none;

  /* Text */
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  cursor: pointer;
`;

//CART

export const CartElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartElement = styled.div`
  min-width: 321px;
  min-height: 144px;
  padding-bottom: 43px;
  margin-top: 33px;
  border-bottom: 1px solid #d7d7f9;

  display: flex;
  justify-content: space-between;

  :last-child {
    border-bottom: 5px solid #d7d7f9;
  }
`;

export const ImageQ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  img {
    width: 65px;
    height: 63px;
  }
  p {
    position: absolute;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    top: 16px;
    background-color: black;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;
export const TextQPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;
export const NombreUnitPrice = styled.div`
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    /* or 200% */
  }
`;
export const QSelectorPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  width: 111px;
`;

export const MinusQBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const Quantity = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
`;
export const PlusQBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const TotalPrice = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: right;

  color: #000000;
`;

export const DetalleFinal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 321px;
  gap: 30px;
  margin-top: 36px;
`;

export const TextosPagoFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  text-align: right;
  gap: 20px;

  p {
    margin-top: 1px;
  }
`;

export const NumerosPagoFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: right;
  gap: 20px;
`;

export const CarEmpty = styled.p`
  width: 100%;
  margin-left: 37px;
  margin-top: 30px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: left;
`;
