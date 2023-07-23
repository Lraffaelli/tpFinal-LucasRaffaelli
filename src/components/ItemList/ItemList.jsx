import Item from "../Item/Item"
import{ItemListStyled} from './ItemListStyled'
const ItemList = ({productos}) => {
  
  return (
    <>
        <h1 style={{textAlign:'center'}}>Productos</h1>
    <ItemListStyled>
        {
            productos.length>0 &&
            productos.map((producto)=>{
              return(
                <Item key={producto.id} producto={producto}/>
              )
            })
        }
    </ItemListStyled>
    
    </>
  )
}

export default ItemList