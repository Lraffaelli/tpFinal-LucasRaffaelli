import { Cart } from './CartWidgetStyled'
//import CartIcon from '../../cart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import{CartContext} from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);
  return (
    <Cart>
        <div >
            <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} size='2x' style={{color: "#ffffff",}} /></Link>            
            {
              cantidadTotal > 0 && (<div className='shop-number'>
              <span>{cantidadTotal}</span>
              </div>)
            }
            
            
        </div>
    </Cart>
  )
}

export default CartWidget