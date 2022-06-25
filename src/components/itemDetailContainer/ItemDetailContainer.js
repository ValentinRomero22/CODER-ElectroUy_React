import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useNotification } from "../../notification/Notification"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState()
    const {id} = useParams()

    const setNotificacion = useNotification()

    useEffect(() =>{
        const docFirebase = doc(db, 'productos', id) 

        getDoc(docFirebase).then(doc =>{
            const productoFirebase = { id: doc.id, ...doc.data() }
            setProducto(productoFirebase)
        }).catch(error =>{
            setNotificacion(error, 'error')
        })
    }, [id])
    
    return(
        <>
            <h2>Detalle del producto</h2>
            <ItemDetail {... producto} />
        </>
    )
}

export default ItemDetailContainer