import { useContext } from "react"
import CartList from "../CartList/CartList"
import { CartListContainerStyled } from "./CartListContainerStyled"
import { CartContext } from "../../context/CartContext"
import EmptyCart from "../EmptyCart/EmptyCart"


const CartListContainer = () => {
  const {cantidadTotal} =useContext(CartContext)

  if(cantidadTotal===0){
    return(
      <EmptyCart/>
    )
  }
  return (
    <CartListContainerStyled>
        <CartList/>        
    </CartListContainerStyled>
  )
}

export default CartListContainer