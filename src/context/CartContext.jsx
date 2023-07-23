import { useState, createContext } from "react";

//2) Creamos el nuevo contexto. 

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTodal: 0
})



export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    
    


    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        
        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);

            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
        } else {
            const carritoActualizado = carrito.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev =>  prev + (item.price * cantidad));
        }
    }

    
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find( prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);         
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.price * productoEliminado.cantidad));
        
    }


    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    const totalItem= (item) => {
        let result = cantidadTotal + item.price
        return result
    }


   

    return (
        <CartContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito,totalItem}}>
            {children}
        </CartContext.Provider>
    )
}

