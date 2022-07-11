import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const WidgetCart = () =>{
    const { cantidadTotal } = useContext(CarritoContext)

    return(
        <div className='widget-carrito'>
            <Link to='/cart/'><img src='/img/carrito.png' alt="Usuario"></img></Link>
            {cantidadTotal}
        </div>
    )
}

export default WidgetCart