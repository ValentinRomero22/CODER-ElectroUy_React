import { createContext, useEffect, useState, useRef } from "react";

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) =>{
    const [carrito, setcarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const render = useRef(0)

    useEffect(() => {
        const carritoStorage = localStorage.getItem('carrito')
        const carritoJson = JSON.parse(carritoStorage)
        setcarrito(carritoJson)
    }, [])

    useEffect(() =>{
        if(render.current > 0){
            localStorage.setItem('carrito', JSON.stringify(carrito))        
        }        
        render.current += 1
    }, [carrito])

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

    const obtenerItemsCarrito = () =>{
        return carrito
    }

    const limpiarCarrito = () =>{
        setcarrito([])
    }

    const eliminarItem = (id) =>{
        const nuevoCarrito = carrito.filter(p => p.id !== id)
        setcarrito(nuevoCarrito)
    }

    return(
        <CarritoContext.Provider 
            value={{
                cantidadTotal, 
                carrito, 
                agregarItem, 
                obtenerItemsCarrito, 
                limpiarCarrito, 
                eliminarItem,}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContext


