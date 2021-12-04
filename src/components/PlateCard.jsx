import React, { useState, useEffect } from "react";
import { useStateCart } from "../context/CartContext";
import {
  PlateCardContainer,
  PlateImg,
  FondoMovido,
  PlateNameBtn,
  PlatePrice,
  PlateName,
  AddBtn,
} from "../generalStyleds";

const PlateCard = ({ plateName, platePrice, plateImg }) => {
  const { cart, setCart } = useStateCart();

  const [plate, setPlate] = useState({});

  const addPlate = (e) => {
    e.preventDefault();

    // console.log(plateName);
    // console.log(platePrice);

    setPlate({
      plateName: plateName,
      platePrice: platePrice,
      plateImg: plateImg,
      plateQ: 1,
    });
  };

  useEffect(() => {

    const repetido = cart.find((e) => e.plateName === plate.plateName);
    
    let arrModifyQ = [];

    if (repetido) {
      arrModifyQ = cart.map((e) => {
        if (e.plateName === plate.plateName) {
          e.plateQ++;
        }
        return e;
      });

      setCart([...arrModifyQ]);
    } else if (!repetido){
        setCart([...cart, plate]);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plate]);

  return (
    <PlateCardContainer>
      <PlateImg src={plateImg} alt={plateName} />
      <FondoMovido></FondoMovido>

      <PlateNameBtn>
        <PlateName>{plateName}</PlateName>
        <PlatePrice>$ {platePrice}</PlatePrice>
        <AddBtn onClick={addPlate}>Add to Cart</AddBtn>
      </PlateNameBtn>
    </PlateCardContainer>
  );
};

export default PlateCard;
