import { createContext, useContext, useState } from "react";

const CartContext = createContext();

//Crear componente de Contexto

export const CartProvider = ({ children}) => {
    
  const [cart, setCart] = useState([]);


  return (
    <CartContext.Provider
      value={{
        //States
        cart,
        //Functions
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useStateCart = () =>{

    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("useStateNumber must be used within a NumberProvider");
      }

      return context;
}
