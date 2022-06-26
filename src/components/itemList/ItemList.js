import Item from "../item/Item"

const ItemList = ({productos}) =>{
    return(
        <div className="catalogo">
            {productos.map(p => <Item key = {p.nombre} {...p}/>)}
        </div>
    )
}

export default ItemList