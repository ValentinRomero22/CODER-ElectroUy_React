import { createContext, useEffect, useState } from "react";

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) =>{
    const [carrito, setcarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    console.log(carrito)

    useEffect(() =>{
        let cantidadTotal = 0

        carrito.forEach(p =>{
            cantidadTotal += p.cantidad
        })   
        setCantidadTotal(cantidadTotal)
    }, [carrito])

    const agregarItem = (producto) =>{
        if(!carrito.some(p => p.id === producto.id)){
            setcarrito([...carrito, producto])
        }        
    }

    /* const obtenerCantidadDeProductos = () =>{
        let cantidadTotal = 0

        carrito.forEach(p =>{
            cantidadTotal += p.cantidad
        })

        return cantidadTotal
    } */

    return(
        <CarritoContext.Provider value={{carrito, agregarItem, cantidadTotal/* obtenerCantidadDeProductos */}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContext


