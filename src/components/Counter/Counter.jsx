import {useCounter} from '../../customHooks/useCounter'
import {CounterStyled} from './CounterStyled'

const Counter = ({stock, inicial, funcionAgregar}) => {
  
    const{count, addCounter,subCounter}=useCounter(inicial,stock)
   const stockDisponible =()=>{
    let result = stock - count
    return result
   }

  return (
  <>  
    <CounterStyled>
      <div className='count-box'>
        <button className='btn-counter' onClick={subCounter}>-</button>
        <p>{count}</p>
        <button className='btn-counter' onClick={addCounter}>+</button>
      </div>
    <p className='stock-info'>Stock disponible: {stockDisponible()} unidades</p>

    <button className='btn-addCart' onClick={()=> funcionAgregar(count)}>Agregar al Carrito</button>
    </CounterStyled>
  </>
  )
}

export default Counter