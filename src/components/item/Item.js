import { Link } from "react-router-dom"

const Item = ({id, imagen, nombre, precio}) =>{

    return(
        <div className="item">
            <div className="item-imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="item-nombre">
                <p>{nombre}</p>
            </div>
            <div className="item-footer">
                <p>$ {precio}</p>
                <div className="contenedor-detalle">
                    <Link className="boton boton-contenedor" to={`/detalle/${id}`}>
                        Ver detalle
                    </Link>
                </div>                
            </div>          
        </div>
    )
}

export default Item