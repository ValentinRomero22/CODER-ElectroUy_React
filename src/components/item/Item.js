import DetailButton from "../button/DetailButton"

const Item = ({imagen, nombre, precio}) =>{
    return(
        <li>
            <img src={imagen} alt={nombre}/>
            <p className="prueba">{nombre}</p>
            <p>$ {precio}</p>
            <DetailButton/>
        </li>
    )
}

export default Item