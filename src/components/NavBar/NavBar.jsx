import { NavBarStyled } from "./NavBarStyled"
import CartWidget from "../CartWidget/CartWidget"
import LogoBox from "./LogoBox"

import Nav from "./Nav"

const NavBar = () => {
  return (
    <NavBarStyled>
      <LogoBox/>
      <Nav/>
      <CartWidget/>
    </NavBarStyled>
  )
}

export default NavBar