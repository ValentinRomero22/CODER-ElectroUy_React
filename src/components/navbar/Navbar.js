import '../../sass/app.scss';
import { Link } from 'react-router-dom';
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
            <a href="#">IMAGEN Y SONIDO</a>
            <ul className="menu-vertical">
              <Link to='/categoria/televisores'>TELEVISORES</Link>
              <Link to='/categoria/audio'>AUDIO</Link>
            </ul>
          </li>
          <li>
            <a href="#">FRÍO Y CALOR</a>
            <ul className="menu-vertical">
              <Link to='/categoria/aires_acondicionados'>AIRES ACONDICIONADOS</Link>
              <Link to='/categoria/verano'>VERANO</Link>
              <Link to='/categoria/invierno'>INVIERNO</Link>
            </ul>
          </li>
          <li>
            <a href="#">COCINA</a>
            <ul className="menu-vertical">
              <Link to='/categoria/cocinas'>COCINAS</Link>
              <Link to='/categoria/microondas'>MICROONDAS</Link>
              <Link to='/categoria/refrigeradores'>REFRIGERADORES</Link>
              <Link to='/categoria/freezers'>FREEZERS</Link>
              <Link to='/categoria/extractores'>EXTRACTORES</Link>
            </ul>
          </li>
          <li>
            <a href="#">BAÑO Y LAVADO
            </a>
            <ul className="menu-vertical">
              <Link to='/categoria/lavarropas'>LAVARROPAS</Link>
              <Link to='/categoria/secarropas'>SECARROPAS</Link>
              <Link to='/categoria/calefones'>CALEFONES</Link>
            </ul>
          </li>
          <li>
            <a href="#">OTROS</a>
            <ul className="menu-vertical">
              <Link to='/categoria/limpieza'>LIMPIEZA</Link>
              <Link to='/categoria/entretenimiento'>ENTRETENIMIENTO</Link>
              <Link to='/categoria/mas_productos'>MÁS PRODUCTOS</Link>
            </ul>
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
