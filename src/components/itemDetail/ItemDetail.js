import { Link } from "react-router-dom"
import BasketButton from "../buttons/BasketButton"
import Counter from "../counter/Counter"

const ItemDetail = ({ nombre, precio, descripcion, imagen}) =>{
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
                        
                            <Counter/>
                        
                        <div className="contenedor-boton-agregar">
                            <Link to=''>
                                <BasketButton/>
                            </Link>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail