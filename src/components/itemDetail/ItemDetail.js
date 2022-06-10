import Item from "../item/Item"
import { Link } from "react-router-dom"
import DetailButton from "../button/DetailButton"

const ItemDetail = ({ nombre, precio, descripcion, imagen}) =>{
    return(
        <>
            <div className="contenedor-item-detalle">
                <div className="item-detalle">
                    <div>
                        <img src={imagen} alt={nombre}></img>   
                    </div>
                    <div className="item-detalle-columna">
                        <div className="item-info">
                            <h2>{nombre}</h2>
                            <p>{descripcion}</p>
                            <p>$ {precio}</p>
                        </div>
                        <div className="contenedor-boton-agregar">
                            <Link className="boton-agregar" to=''>
                                <button>Agregar al carrito</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail