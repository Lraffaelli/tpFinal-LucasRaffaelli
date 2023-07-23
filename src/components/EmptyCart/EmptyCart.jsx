import shoppingBag from '../../shopping-bag.png'
import { Link } from 'react-router-dom'
import {EmptyCartStyled} from './EmptyCartStyled'
const EmptyCart = () => {
  return (
    <EmptyCartStyled>
        <div className='bag-box'>
            <img src={shoppingBag} alt="shopping bag" />
            <h4>¡Empieza un carrito de compras!</h4>
            <p>Sumá productos y conseguí envío gratis.</p>
            <Link to="/"className='btn-discover'>Descubrir Productos</Link>
        </div>


    </EmptyCartStyled>
  )
}

export default EmptyCart