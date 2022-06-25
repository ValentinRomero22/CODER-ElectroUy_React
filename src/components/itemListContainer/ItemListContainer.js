import {useEffect, useState} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useNotification } from "../../notification/Notification"

const ItemListContainer = (props) => { 
    const [productos, setProductos] = useState([])
    const [cargador, setCargador] = useState([true])

    const {categoria} = useParams()

    const setNotificacion = useNotification()
    
    useEffect(() =>{
        setCargador(true)

        const collectionFirebase = categoria ? (
            query(collection(db, 'productos'), where('categoria', '==', categoria))
        ) : (collection(db, 'productos'))

        getDocs(collectionFirebase).then(response =>{
            const productosFirebase = response.docs.map(doc =>{
                return{ id: doc.id, ...doc.data() }
            })

            setProductos(productosFirebase)
        }).catch(error =>{
            setNotificacion(error, 'error')
        }).finally(() =>{
            setCargador(false)
        })
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
