import { createContext, useEffect, useState } from "react";

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    console.log(carrito)

    useEffect(() =>{
        let cantidadTotal = 0
        carrito.forEach(p => {
            cantidadTotal += p.cantidad
        })

        setCantidadTotal(cantidadTotal)
    }, [carrito])

    const agregarItem = (producto) =>{
        if(!carrito.some(p => p.id === producto.id)){
            setCarrito([...carrito, producto])
        }
    }

    const eliminarItem = (id) =>{
        const productoAEliminar = carrito.filter(p => p.id !== id)
        setCarrito(productoAEliminar)
    }

    const existeEnCarrito = (id) =>{
        return carrito.some(p => p.id === id)
    }

    return(
        <CarritoContext.Provider value={{ 
            carrito,
            cantidadTotal,
            agregarItem,
            eliminarItem,
            existeEnCarrito,
            /* getCartQuantity */
        }}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContext