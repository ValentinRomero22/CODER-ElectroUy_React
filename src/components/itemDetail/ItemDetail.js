import { useContext, useState} from "react"
import { Link } from "react-router-dom"
import Counter from "../counter/Counter"
import CarritoProvider from "../../context/CarritoContext"
import useNotification from "../../hooks/useNotificacion"

const ItemDetail = ({ id, nombre, precio, descripcion, imagen, stock }) =>{
    const { agregarItem } = useContext(CarritoProvider)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const agregarNotificacion = useNotification()
    
    const handleAgregar = (cantidadText) => { 
        let cantidad = parseInt(cantidadText)
        const actualizar = agregarItem({ id, nombre, precio, cantidad })
        if(actualizar){
            agregarNotificacion('Este producto ya se encontraba en el carrito, se actualizó su cantidad', 'advertencia')
        }
        else{
            agregarNotificacion('Producto agregado correctamente', 'exito')
        }
        setCantidadAgregada(cantidad)        
    }

    return(
        <>
            <div className="contenedor-item-detalle">
                <div className="item-detalle">
                    <div className="item-imagen">
                        <img src={imagen} alt={nombre}></img>   
                    </div>
                    <hr className="separador"></hr>
                    <div className="item-detalle-columna">
                        <div className="item-nombre">
                            <h2>{nombre}</h2>
                        </div>
                        <div className="item-descripcion">
                            <p>{descripcion}</p>
                        </div>                       
                        <div className="item-precio">
                            <p>Precio: $ {precio}</p> 
                        </div>
                        <div className="contenedor-contador">
                        {
                            cantidadAgregada === 0 
                            ? <div>
                                <Counter onAdd={handleAgregar} stock={stock}/>
                            </div>
                            : <div>
                                <Link to='/cart' className="boton-terminar">Terminar compra</Link> 
                            </div>                   
                        }
                        </div>                                             
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail