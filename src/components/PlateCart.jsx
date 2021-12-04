import React from "react";
import Swal from 'sweetalert2'


//Styleds
import {
  CartElement,
  ImageQ,
  TextQPrice,
  NombreUnitPrice,
  QSelectorPrice,
  QSelector,
  MinusQBtn,
  Quantity,
  PlusQBtn,
  TotalPrice,
} from "../generalStyleds";

//icons
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

//Context
import {useStateCart} from "../context/CartContext"

const PlateCart = ({ plateName, platePrice, plateImg, plateQ }) => {

    const {cart, setCart} = useStateCart();


    const buscarRepetido = (plateName) =>{
        
        const repetido = cart.find(e=>(
            e.plateName === plateName
        ))
        return repetido; 
    }

    const actualizarCartPlus = (plateName) =>{
        const cartActualizado = cart.map(e=>{
            if (e.plateName === plateName) {
                e.plateQ++
            }
            return e
        })

        return cartActualizado
    } 

    const actualizarCartMinus = (plateName) =>{
        const cartActualizado = cart.map(e=>{
            if (e.plateName === plateName) {
                e.plateQ--
            }
            return e
        })

        return cartActualizado
    } 

    const eliminarPlate = (plateName) =>{

        const platesFiltrados = cart.filter(e=>(
            e.plateName !== plateName
        ))
        
        return platesFiltrados

    }

    const onPlus = () => {
        const hayRepetido = buscarRepetido(plateName)

        if (hayRepetido) {
            const arrActualizado = actualizarCartPlus(plateName)
            setCart([...arrActualizado])
        } else {
            return
        }
    }

    const onMinus = () => {
        const hayRepetido = buscarRepetido(plateName)

        if (hayRepetido) {
            const arrActualizado = actualizarCartMinus(plateName)
            setCart([...arrActualizado])
        } else {
            return
        }

        if (plateQ===1) {
            Swal.fire({
                title: 'Seguro?',
                text: "Puedes volver a agregar el producto cuando quieras!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3a3a3a',
                confirmButtonText: 'SI, ELIMINALO',
                cancelButtonText: "CANCELAR"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'ELIMINADO',
                    'El producto fue eliminado de tu carrito.',
                    'success'
                  )
                  console.log("Borrando...");
                  //Eliminar el producto
                  const arrPlateEliminado = eliminarPlate(plateName)

                  setCart([
                      ...arrPlateEliminado
                  ])
                }
              })

        }
    }


  return (
    <CartElement>
      <ImageQ>
        <img src={plateImg} alt="" />
        <p>{plateQ}</p>
      </ImageQ>
      <TextQPrice>
        <NombreUnitPrice>
          <h3>{plateName}</h3>
          <p>${platePrice}</p>
        </NombreUnitPrice>
        <QSelectorPrice>
          <QSelector>
            <MinusQBtn 
                onClick={onMinus}
                disabled={plateQ===0}
                >
              <IoIosArrowDropleftCircle size="3.7rem" color="#6B00F5" />
            </MinusQBtn>
            <Quantity>{plateQ}</Quantity>
            <PlusQBtn onClick={onPlus}>
              <IoIosArrowDroprightCircle size="3.7rem" color="#6B00F5" />
            </PlusQBtn>
          </QSelector>
          <TotalPrice>${(plateQ*platePrice).toFixed(2)}</TotalPrice>
        </QSelectorPrice>
      </TextQPrice>
    </CartElement>
  );
};

export default PlateCart;
