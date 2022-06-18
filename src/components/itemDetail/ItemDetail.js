import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import BasketButton from "../buttons/BasketButton"
import Counter from "../counter/Counter"
import CarritoProvider from "../../context/CarritoContext"

const ItemDetail = ({ id, nombre, precio, descripcion, imagen, stock }) =>{
    const {agregarItem} = useContext(CarritoProvider)

    const handleAgregar = (cantidad) => {   
        agregarItem({id, nombre, precio, cantidad})
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
                        
                            <Counter onAdd={handleAgregar} stock={stock}/>
                        
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