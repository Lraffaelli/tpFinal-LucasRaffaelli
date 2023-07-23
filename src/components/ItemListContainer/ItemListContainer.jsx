import { useState, useEffect } from "react"
import { ItemsListContainerStyled } from "./ItemsListContainerStyled"
import{getProducts,getByCategory} from "../../api"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

const[productos,setProductos]=useState([]);

const {idCategoria}=useParams();

useEffect(()=>{
  
    const  traerProductos =  idCategoria ? getByCategory :  getProducts;

    traerProductos(idCategoria)
    .then(res=>setProductos(res))
    
  
 
  
},[idCategoria]) 

  return (
    <ItemsListContainerStyled>
      <div>
          <ItemList  productos={productos}/>
      </div>
    </ItemsListContainerStyled>
  )
}

export default ItemListContainer