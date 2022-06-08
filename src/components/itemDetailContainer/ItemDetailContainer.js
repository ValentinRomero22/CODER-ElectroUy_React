import { useEffect, useState } from "react"
import { obtenerProductosPorId } from "../asyncmock"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState()
    const {id} = useParams()

    useEffect(() =>{
        obtenerProductosPorId(parseInt(id)).then(response => {
            setProducto(response)
        })
    }, [])
    
    return(
        <>
            <h2>Detalle del producto</h2>
            <ItemDetail {... producto} />
        </>
    )
}

export default ItemDetailContainer