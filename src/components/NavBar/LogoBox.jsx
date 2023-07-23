
import { LogoStyled } from './Logo'
import Logotipo from '../../logo.png'
import { Link } from 'react-router-dom'

const LogoBox = () => {
  return (
    <LogoStyled>
       <img src={Logotipo} alt="" /> 
       <Link className='logo' to={"/"}>
         <h1>TheShop</h1>       
       </Link>
    </LogoStyled>
  )
}

export default LogoBox