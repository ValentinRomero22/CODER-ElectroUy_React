import { db } from "."
import { collection, query, where, getDocs } from "firebase/firestore"
import { adaptadorProductosFirebase } from "../../adapters/adaptador"
import { adaptadorCategoriasFirebase } from "../../adapters/adaptador"

export const obtenerProductos = (categoria) => {
    return new Promise((resolve, reject) =>{
        const coleccion = categoria ? (
            query(collection(db, 'productos'), where('categoria', '==', categoria))
        ) : (collection(db, 'productos')) 
    
        getDocs(coleccion).then(response =>{
            const productosFirebase = response.docs.map(doc => {
                return adaptadorProductosFirebase(doc)
            })
            resolve(productosFirebase)
        }).catch(error =>{
            reject(error)
        })
    })
}

export const obtenerCategorias = () => {
    return new Promise((resolve, reject) =>{
        const coleccion = collection(db, 'categorias')

        getDocs(coleccion).then(response =>{
            const categoriaFirebase = response.docs.map(doc => {
                return adaptadorCategoriasFirebase(doc)
            })
            resolve(categoriaFirebase)
        }).catch(error =>{
            reject(error)
        })
    })
}
