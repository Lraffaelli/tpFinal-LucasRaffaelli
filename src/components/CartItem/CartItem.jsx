import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItemStyled } from "./CartItemStyled";
const CartItem = ({ producto }) => {
  const { eliminarProducto } = useContext(CartContext);
  const { item, cantidad } = producto;
  const totalItem= () => {
    let result = cantidad * item.price
    return result
}
  return (
    <CartItemStyled>        
      <div className="img">
        <img src={item.image} alt={item.title} />
      </div>      
      <h3>{item.title}</h3>
      <p>{cantidad} Unid.</p>
      <span>Precio unitario: ${item.price}</span>
      <p>Total: ${totalItem()}</p>
      <button className="btn-delete" onClick={() => eliminarProducto(item.id)}> Eliminar Producto </button>
    </CartItemStyled>
  );
};

export default CartItem;
