import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import BasketButton from "../buttons/BasketButton"
import Counter from "../counter/Counter"
import CarritoContext from "../../context/CarritoContext"

const ItemDetail = ({ id, nombre, precio, descripcion, imagen, stock}) =>{
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    //const { agregarItem } = useContext(CarritoContext)
    
    const handleOnAdd = (cantidad) => {
        /* console.log(`se agregaron ${cantidad} ${nombre}`)  */
        //agregarItem({id, nombre, precio, descripcion, imagen, stock})
        setCantidadAgregada(cantidad)
    }

    return(
        <>
            <div className="contenedor-item-detalle">
                <div className="item-detalle">
                    <div className="item-imagen">
                        <img src={imagen} alt={nombre}></img>   
                    </div>
                    <div className="item-detalle-columna">
                        <h2>{nombre}</h2>
                        <p>{descripcion}</p>
                        <p>$ {precio}</p>
                        
                            <Counter onAdd={"onAdd"} stock={stock}/>
                        
                        {/* <div className="contenedor-boton-agregar">
                            <Link to=''>
                                <BasketButton/>
                            </Link>
                        </div>  */}                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail