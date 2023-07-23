import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { CartListStyled } from "./CartListStyled";
import { Link } from "react-router-dom";

const CartList = () => {
  const { carrito, total, cantidadTotal,vaciarCarrito } = useContext(CartContext);
  return (
    <CartListStyled>
      <div>
      {carrito.map((item) => {
       
        return <CartItem key={item.item.id} producto={item} />;
      })}

      </div>
      <div className="buy-finish">
        <div className="span-box">
          <p>Resumen de Compra</p>
        </div>

        <p>Cantidad de productos: {cantidadTotal}</p>
        <h3>
          Total a pagar:<strong>$ {total}</strong>
        </h3>
        <button className="btn-clear" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout" className="btn-buy">Finalizar Compra</Link>
      </div>
    </CartListStyled>
  );
};

export default CartList;
