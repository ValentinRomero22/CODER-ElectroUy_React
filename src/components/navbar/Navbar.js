import '../../sass/app.scss';
import { Link, NavLink } from 'react-router-dom';
import WidgetCart from '../widgetCart/WidgetCart';
import { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext';

const Navbar = () => {
  const { carrito } = useContext(CarritoContext)

  return (
    <header>
      <div className="marca">
        <div>
          <img src='/img/logo.png' alt="Logo"></img>
        </div>
        <div>
          <Link to='/'>
            <h1>Electro UY</h1>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="menu-horizontal">
          <li>
            <Link to='/categoria/imagen_y_sonido'>IMAGEN Y SONIDO</Link>
          </li>
          <li>
            <Link to='/categoria/linea_blanca'>LINEA BLANCA</Link>
          </li>
          <li>
            <Link to='/categoria/tecnologia'>TECNOLOGIA</Link>
          </li>
          <li>
            <Link to='/categoria/otros'>OTROS</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        { carrito.length > 0 && <WidgetCart />}
      </div>
    </header>
  );
}
  
export default Navbar
