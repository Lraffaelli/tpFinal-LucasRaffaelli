import {ItemStyled} from'./ItemStyled'
import {BtnDetailStyled} from'./BtnDetailStyled'

const Item = ({producto}) => {
  
  return (
    <ItemStyled>
      <div className='img-container'>
        <img className='imagen' src={producto.image} alt={producto.title} />
      </div>
      <div className='item-info'>
        <h2>{producto.title}</h2>
        <div className='item-body'>
          <BtnDetailStyled to={`/item/${producto.id}`}>Ver Detalles</BtnDetailStyled>
          <span><sup>$</sup>{producto.price}</span>
        </div>
      </div>
    </ItemStyled>
  )
}

export default Item