import { FooterStyled } from "./FooterStyled"
import logotipo from '../../../public/isotipo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <FooterStyled>
        <div className="brand">
            <div className="img"><img src={logotipo} alt="" /></div>
            <div className="createBy">
               <p>Create by</p>
               <h4>Lucas Raffaelli <FontAwesomeIcon icon={faRegistered} size="xs" /></h4>
            </div>
        </div>
    </FooterStyled>
    
  )
}

export default Footer