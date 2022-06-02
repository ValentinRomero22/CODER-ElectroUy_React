import Item from "../item/Item"

const ItemList = ({productos}) =>{
    return(
        <ul>
            {productos.map(p => <Item key = {p.nombre} {...p}/>)}
        </ul>
    )
}

export default ItemList