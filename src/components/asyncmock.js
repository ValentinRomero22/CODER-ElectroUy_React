import aire_acondicionado from '../img/aire_acondicionado.png'
import aspiradora from '../img/aspiradora.png'
import calefon from '../img/calefon.png'
import cocina from '../img/cocina.png'
import lavarropas from '../img/lavarropas.png'
import microondas from '../img/microondas.png'
import secarropas from '../img/secarropas.png'
import tv from '../img/tv.png'

const productos = [
    {
        id: 1,
        nombre: 'Aire acondicionado',
        precio: 11500,
        descripcion: 'Aire acondicionado 12.000 BTU',
        categoria: 'aires_acondicionados',
        imagen: aire_acondicionado,
        stock: 3
    },
    {
        id: 2,
        nombre: 'Aspiradora eléctrica',
        precio: 3500,
        descripcion: 'Aspiradora eléctrica automática blanca',
        categoria: 'limpieza',
        imagen: aspiradora, 
        stock: 10
    },
    {
        id: 3,
        nombre: 'Cocina electrica',
        precio: 16000,
        descripcion: 'Cocina con hornallas y horno eléctrico',
        categoria: 'cocinas',
        imagen: cocina, 
        stock: 5
    },
    {
        id: 4,
        nombre: 'Microondas 20lt',
        precio: 6500,
        descripcion: 'Microondas 20lt gris y negro',
        categoria: 'microondas',
        imagen: microondas, 
        stock: 7
    },
    {
        id: 5,
        nombre: 'Secarropas 8kg',
        precio: 5500,
        descripcion: 'Secarropas 8kg carga frontal',
        categoria: 'secarropas',
        imagen: secarropas, 
        stock: 4
    },
    {
        id: 6,
        nombre: 'Smart TV 4k 55"',
        precio: 26500,
        descripcion: 'Smart TV 4k Ultra HD 55"',
        categoria: 'televisores',
        imagen: tv, 
        stock: 6
    }
]

export const obtenerProductos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos)
        }, 1000)
    })
}

export const obtenerProductosPorId = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos.find(p => p.id === id))
        }, 500)
    })
}

export const obtenerProductosPorCategoria = (categoria) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos.filter(p => p.categoria === categoria))
        }, 500)
    })
}