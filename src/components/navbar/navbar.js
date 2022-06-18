import logo from '../../img/logo.png'
import '../../sass/app.scss';
import { Link } from 'react-router-dom';
import WidgetCart from '../widgetCart/WidgetCart';

const Navbar = () => {
    return (
      <header>
        <div className="marca">
          <div>
            <img src={logo} alt="Logo"></img>
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
              <a href="#">Imagen y sonido</a>
              <ul className="menu-vertical">
                {/* <NavLink className={({ isActive }) => isActive ? 'claseActivo' : 'claseNoActivo'} to='/categoria/televisores'>Televisores</NavLink> */}
                <Link to='/categoria/televisores'>Televisores</Link>
                <Link to='/categoria/audio'>Audio</Link>
              </ul>
            </li>
            <li>
              <a href="#">Frío y calor</a>
              <ul className="menu-vertical">
                <Link to='/categoria/aires_acondicionados'>Aires acondicionados</Link>
                <Link to='/categoria/verano'>Verano</Link>
                <Link to='/categoria/invierno'>Invierno</Link>
              </ul>
            </li>
            <li>
              <a href="#">Cocina</a>
              <ul className="menu-vertical">
                <Link to='/categoria/cocinas'>Cocinas</Link>
                <Link to='/categoria/microondas'>Microondas</Link>
                <Link to='/categoria/refrigeradores'>Refrigeradores</Link>
                <Link to='/categoria/freezers'>Freezers</Link>
                <Link to='/categoria/extractores'>Extractores</Link>
              </ul>
            </li>
            <li>
              <a href="#">Baño y lavado</a>
              <ul className="menu-vertical">
                <Link to='/categoria/lavarropas'>Lavarropas</Link>
                <Link to='/categoria/secarropas'>Secarropas</Link>
                <Link to='/categoria/calefones'>Calefones</Link>
              </ul>
            </li>
            <li>
              <a href="#">Otros</a>
              <ul className="menu-vertical">
                <Link to='/categoria/limpieza'>Limpieza</Link>
                <Link to='/categoria/entretenimiento'>Entretenimiento</Link>
                <Link to='/categoria/mas_productos'>Más productos</Link>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="cart">          
          <WidgetCart />
        </div>
      </header>
    );
  }
  
  export default Navbar