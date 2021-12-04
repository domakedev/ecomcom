import React, { useState, useEffect } from "react";
import {
  Section,
  Title,
  CartElements,
  TextosPagoFinal,
  NumerosPagoFinal,
  DetalleFinal,
  CarEmpty,
} from "../generalStyleds";
import { useStateCart } from "../context/CartContext";
import PlateCart from "./PlateCart";

const Cart = () => {
  const { cart } = useStateCart();

  const [precioFinal, SetPrecioFinal] = useState({
    subTotal: 0,
    tax: 0,
    total: 0,
  });

  const { subTotal, tax, total } = precioFinal;

  useEffect(() => {
    let tempTotal = [];

    cart.forEach((e) => {
      let precioPorPlate = e.platePrice * e.plateQ;
      tempTotal.push(precioPorPlate);
    });

    console.log("Antes", tempTotal);

    tempTotal.shift();

    console.log("Despues", tempTotal);

    let numeros = tempTotal;
    let total = numeros.reduce((a, b) => a + b, 0);

    console.log("Suma:", total);

    SetPrecioFinal({
      subTotal: (total * (1 - 0.0975)).toFixed(2),
      tax: (total * 0.0975).toFixed(2),
      total: total.toFixed(2),
    });
  }, [cart]);

  return (
    <Section>
      <Title>Your Cart</Title>

      {cart.length === 1 ? (
        <CarEmpty>Your cart is empty.</CarEmpty>
      ) : (
        <>
          <CartElements>
            {cart.map((p, i) => {
              if (i === 0) {
                return null;
              }
              return (
                <PlateCart
                  key={i}
                  plateName={p.plateName}
                  platePrice={p.platePrice}
                  plateImg={p.plateImg}
                  plateQ={p.plateQ}
                />
              );
            })}
          </CartElements>

          <DetalleFinal>
            <TextosPagoFinal>
              <p>Subtotal:</p>
              <p>Tax:</p>
              <p>Total:</p>
            </TextosPagoFinal>
            <NumerosPagoFinal>
              <p>${subTotal}</p>
              <p>${tax}</p>
              <p>${total}</p>
            </NumerosPagoFinal>
          </DetalleFinal>
        </>
      )}
    </Section>
  );
};

export default Cart;
