import {useEffect, useState} from 'react'
import { obtenerProductos, obtenerProductosPorCategoria } from "../asyncmock"
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([])
    const [cargador, setCargador] = useState([true])

    const {categoria} = useParams()
    
    useEffect(() =>{
        setCargador(true)

        if(!categoria){
            obtenerProductos().then(response =>{
                setProductos(response)
            }).finally(() =>{
                setCargador(false)
            })
        }
        else{
            obtenerProductosPorCategoria(categoria).then(response =>{
                setProductos(response)
            }).finally(() =>{
                setCargador(false)
            })
        }
    }, [categoria])

    if(cargador){
        return <h3>Cargando...</h3>
    }

    return(
        <div className="catalogo">
            <h2>{props.titulo}</h2>
            {productos.length > 0 ? <ItemList productos={productos} /> : <h3>No hay productos</h3>}
        </div>
    ); 
}

export default ItemListContainer
