import { Link } from "react-router-dom"
import { FinishStyled } from "./FinishStyled"
const FinishBuying = () => {
  return (
      <FinishStyled>
        <Link className="btn go-on" to="/"> Seguir Comprando</Link>
        <Link className="btn buy" to="/cart"> Terminar Compra</Link>
    </FinishStyled>
  )
}

export default FinishBuying