import {useEffect, useState} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useNotification } from "../../notification/Notification"
import Louder from '../louder/Louder'

const ItemListContainer = () => { 
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
        return <Louder />
    }

    let titulo = ''
    if(categoria)
        titulo = 'LISTADO DE ' + categoria.replace(/_/g, ' ').toUpperCase()
    else
        titulo = 'LISTADO DE PRODUCTOS'

    return(
        <>
            <h2>{titulo}</h2>
            <div>
                {/* {categoria ? <h2>LISTADO DE {categoria.replace(/_/g, ' ').toUpperCase()}</h2> : <h2>LISTADO DE PRODUCTOS</h2>} */}
                {productos.length > 0 ? <ItemList productos={productos} /> : <h3>No hay productos</h3>}
            </div>
        </>
    ); 
}

export default ItemListContainer
