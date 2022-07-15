import { createContext, useEffect, useState, useRef } from "react"

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) =>{
    const [carrito, setcarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const render = useRef(0)

    useEffect(() => {
        const carritoStorage = localStorage.getItem('carrito')
        if(carritoStorage){
            const carritoJson = JSON.parse(carritoStorage)
            setcarrito(carritoJson)
        }
    }, [])

    useEffect(() =>{
        if(render.current > 0){
            localStorage.setItem('carrito', JSON.stringify(carrito))        
        }        
        render.current += 1
    }, [carrito])

    useEffect(() =>{
        let cantidadTotal = 0

        if(carrito != null){
            carrito.forEach(p =>{
                cantidadTotal += p.cantidad
            })  
            setCantidadTotal(cantidadTotal)
        } 
    }, [carrito])

    const agregado = (producto) =>{
        return (carrito.some(p => p.id === producto.id))
    }

    const agregarItem = (producto) =>{
        if(!agregado(producto)){
            setcarrito([...carrito, producto])  
        }
        else{
            const prod = carrito.find(p => p.id === producto.id)
            prod.cantidad += producto.cantidad
            setcarrito([...carrito])
            return true
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

    const obtenerTotal = () =>{
        let total = 0
        carrito.forEach(item => {
            total += item.precio * item.cantidad
        });

        return total
    }

    return(
        <CarritoContext.Provider 
            value={{
                cantidadTotal, 
                carrito, 
                agregarItem, 
                obtenerItemsCarrito, 
                limpiarCarrito, 
                eliminarItem,
                obtenerTotal,
                agregado}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContext


