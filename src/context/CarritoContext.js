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
        else{
            const prod = carrito.find(p => p.id === producto.id)
            prod.cantidad += producto.cantidad
            setcarrito([...carrito])
        }
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarItem, cantidadTotal}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContext


