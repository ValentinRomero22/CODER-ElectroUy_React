import DetailButton from "../buttons/DetailButton"
import { Link } from "react-router-dom"

const Item = ({id, imagen, nombre, precio}) =>{
    return(
        <li>
            <img src={imagen} alt={nombre}/>
            <p className="prueba">{nombre}</p>
            <p>$ {precio}</p>
            <Link className="contenedor-detalle" to={`/detalle/${id}`}>
                <DetailButton/>
            </Link>
        </li>
    )
}

export default Item