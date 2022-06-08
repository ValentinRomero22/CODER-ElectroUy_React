import logo from '../../img/logo.png'
import usuario from '../../img/usuario.png'
import '../../sass/app.scss';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
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
                {/* <li><a href="#">Televisores</a></li>
                <li><a href="#">Audio</a></li> */}
              </ul>
            </li>
            <li>
              <a href="#">Frío y calor</a>
              <ul className="menu-vertical">
                <li><a href="#">Aires acondicionados</a></li>
                <li><a href="#">Verano</a></li>
                <li><a href="#">Invierno</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Cocina</a>
              <ul className="menu-vertical">
                <li><a href="#">Cocinas</a></li>
                <li><a href="#">Microondas</a></li>
                <li><a href="#">Refrigeradores</a></li>
                <li><a href="#">Freezers</a></li>
                <li><a href="#">Extractores</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Baño y lavado</a>
              <ul className="menu-vertical">
                <li><a href="#">Lavarropas</a></li>
                <li><a href="#">Secarropas</a></li>
                <li><a href="#">Calefones</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Otros</a>
              <ul className="menu-vertical">
                <li><a href="#">Limpieza</a></li>
                <li><a href="#">Entretenimiento</a></li>
                <li><a href="#">Más productos</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="box-searcher">
          <input type="text" placeholder="Buscar" className="searcher"/>
        </div>
        <div className="user">
          <a href="#"><img src={usuario} alt="Usuario"></img></a>
        </div>
      </header>
    );
  }
  
  export default navbar