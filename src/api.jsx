import { db } from "./service/config";
import { getDocs, collection, query,where,getDoc, doc } from "firebase/firestore";

export const getProducts = async () => {
  const misProductos = query(collection(db, "productos"));

  const products= await getDocs(misProductos)

  const datos= products.docs.map((doc) =>{
    const data = doc.data();
    data.id = doc.id;
    return data;
  })

   
   return datos 
};

export const getByCategory = async (idCategoria) => {    
   const categoryList = query(collection(db,"productos"), where("idCategory","==",idCategoria))
   const products= await getDocs(categoryList)

   const datos= products.docs.map((doc) =>{
    const data = doc.data();
    data.id = doc.id;
    return data;
  }) 
   return datos 
}

export const getOneProduct = async(idItem) =>{
    const getItem = doc(db, "productos", idItem);
    const item= await getDoc(getItem)
    const data = item.data();
    const newItem = {id:item.id, ...data};
    return newItem;
           
}