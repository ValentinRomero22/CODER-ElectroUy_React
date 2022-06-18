import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import carrito from '../../img/carrito.png'
import { Link } from 'react-router-dom';

const WidgetCart = () =>{
    const { /* obtenerCantidadDeProductos */ cantidadTotal } = useContext(CarritoContext)
    /* const cantidadTotal = obtenerCantidadDeProductos() */

    return(
        <div className='widget-carrito'>
            <Link to='/cart'><img src={carrito} alt="Usuario"></img></Link>
            {/* <a href="#"><img src={usuario} alt="Usuario"></img></a> */}
            {cantidadTotal}
        </div>
    )
}

export default WidgetCart