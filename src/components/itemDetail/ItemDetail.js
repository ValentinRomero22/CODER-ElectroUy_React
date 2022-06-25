import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Counter from "../counter/Counter"
import CarritoProvider from "../../context/CarritoContext"
import { useNotification } from "../../notification/Notification"

const ItemDetail = ({ id, nombre, precio, descripcion, imagen, stock }) =>{
    const {agregarItem} = useContext(CarritoProvider)

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const setNotificacion = useNotification()

    const handleAgregar = (cantidadText) => { 
        let cantidad = parseInt(cantidadText)
        agregarItem({ id, nombre, precio, cantidad})
        setNotificacion('Producto agregado correctamente', 'exito')
        setCantidadAgregada(cantidad)        
    }

    return(
        <>
            <div className="contenedor-item-detalle">
                <div className="item-detalle">
                    <div className="item-imagen">
                        <img src={`/img/${imagen}.png`} alt={nombre}></img>   
                    </div>
                    <div className="item-detalle-columna">
                        <h2>{nombre}</h2>
                        <p>{descripcion}</p>
                        <p>$ {precio}</p>   
                        {
                            cantidadAgregada === 0 
                            ? <Counter onAdd={handleAgregar} stock={stock}/>
                            : <Link to='/cart' className="boton-terminar">Terminar compra</Link>                    
                        }                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail