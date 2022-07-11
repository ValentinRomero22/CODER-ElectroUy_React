import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Louder from '../louder/Louder'
import { obtenerProductos } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'
import useNotification from "../../hooks/useNotificacion"

const ItemListContainer = () => { 
    const {categoria} = useParams()
    const agregarNotificacion = useNotification()
    
    const {cargando, data, error} = useAsync(() => obtenerProductos(categoria), [categoria])

    if(cargando){
        return <Louder />
    }

    if(error){
        agregarNotificacion('Se produjo un error inesperado' , 'error')
    }

    let titulo = ''
    if(categoria)
        titulo = categoria.replace(/_/g, ' ').toUpperCase()
    else
        titulo = 'PRODUCTOS'

    return(
        <>
            <h2>{titulo}</h2>
            <div>
                {data.length > 0 ? <ItemList productos={data} /> : <h3>No hay productos</h3>}
            </div>
        </>
    ); 
}

export default ItemListContainer
