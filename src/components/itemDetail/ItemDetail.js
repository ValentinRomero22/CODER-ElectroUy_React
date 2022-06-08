import Item from "../item/Item"

const ItemDetail = ({ nombre, precio, descripcion, imagen}) =>{
    return(
        <>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <p>{descripcion}</p>
            <img src={imagen} alt={nombre}></img>
        </>
    )
}

export default ItemDetail