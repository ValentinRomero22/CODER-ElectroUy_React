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
        categoria: 'aires acondicionados',
        imagen: aire_acondicionado
    },
    {
        id: 2,
        nombre: 'Aspiradora eléctrica',
        precio: 3500,
        descripcion: 'Aspiradora eléctrica automática blanca',
        categoria: 'limpieza',
        imagen: aspiradora
    },
    {
        id: 3,
        nombre: 'Cocina electrica',
        precio: 16000,
        descripcion: 'Cocina con hornallas y horno eléctrico',
        categoria: 'cocinas',
        imagen: cocina
    },
    {
        id: 4,
        nombre: 'Microondas 20lt',
        precio: 6500,
        descripcion: 'Microondas 20lt gris y negro',
        categoria: 'microondas',
        imagen: microondas
    },
    {
        id: 5,
        nombre: 'Secarropas 8kg',
        precio: 5500,
        descripcion: 'Secarropas 8kg carga frontal',
        categoria: 'secarropas',
        imagen: secarropas
    },
    {
        id: 6,
        nombre: 'Smart TV 4k 55"',
        precio: 26500,
        descripcion: 'Smart TV 4k Ultra HD 55"',
        categoria: 'televisores',
        imagen: tv
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