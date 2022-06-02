import {useEffect, useState} from 'react'
import { obtenerProductos } from "../asyncmock"
import ItemList from '../itemList/ItemList'

const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
        obtenerProductos().then(response =>{
            setProductos(response)
        })
    }, [])

    return(
        <div className="catalogo">
            <h1>{props.titulo}</h1>
            <ItemList productos={productos} />
        </div>
    ); 
}

export default ItemListContainer