import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../api"
import { ItemDetailContainerStyled } from "./ItemDetailConteiner" 


const ItemDetailConatiner = () => {

    const[producto, setProducto]=useState({})

    const {idItem}=useParams()

    useEffect(() => {

        getOneProduct(idItem)
        .then(res=>setProducto(res))
        .catch(err => console.log(err))
    },[idItem])

  return (
    <ItemDetailContainerStyled>
        <ItemDetail  {...producto}/>
    </ItemDetailContainerStyled>
  )
}

export default ItemDetailConatiner