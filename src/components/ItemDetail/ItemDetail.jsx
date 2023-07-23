import {ItemDetailStyled} from'./ItemDetailStyled'
import Counter from '../Counter/Counter'
import { useState, useContext } from 'react'
import{CartContext} from '../../context/CartContext'
import FinishBuying from '../FinishBuying/FinishBuying'


const ItemDetail = ({title,image, price,stock, description, id}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  
  const {agregarProducto} = useContext(CartContext);

  const handleCuantitie=(cantidad) => {
    setAgregarCantidad(cantidad); 
    const item = {id, title, price, image};
    agregarProducto(item, cantidad);
  }
  
  return (
    <ItemDetailStyled>
        <div className='img-detail'>
          <img className="image"src={image} alt={title} />          
        </div>
        <div className='info-detail'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className='price-detail'>
            {
                        agregarCantidad > 0 ? (<FinishBuying/>) : <Counter stock={stock} inicial={1}  funcionAgregar={handleCuantitie}/>
            }
            
            <span> <sup>$</sup>{price}</span>
          </div>
          
        </div>
        
        
    </ItemDetailStyled>
  )
}

export default ItemDetail