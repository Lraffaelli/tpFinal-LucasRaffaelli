import { NavStyled } from "./NavStyled"
import{StyleNavLink} from "./StyledNavLink"

const Nav = () => {
  return (
    <NavStyled>
        <li ><StyleNavLink to={'/categoria/1'}>Tecnología</StyleNavLink></li>
        <li><StyleNavLink to={'/categoria/2'}>Indumentaria Masculina</StyleNavLink></li>
        <li><StyleNavLink to={'/categoria/3'}>Indumentaria Femenina</StyleNavLink></li>
        <li><StyleNavLink to={'/categoria/4'}>Joyería</StyleNavLink></li>
       
    </NavStyled>
  )
}

export default Nav