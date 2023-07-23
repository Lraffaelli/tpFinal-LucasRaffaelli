
import { CartItemStyled } from "../CartItem/CartItemStyled";

const ItemCheckout = ({producto}) => {
    
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
       
      </CartItemStyled>
    );
}

export default ItemCheckout