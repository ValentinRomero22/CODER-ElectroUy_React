import { NavLink } from 'react-router-dom'

const Menu = ({categorias}) =>{

    return(
        <>  
            {categorias.map( c =>
                <li key={c.nombre}>
                    <NavLink
                        to={`/categoria/${c.nombre}`}
                        className={({isActive}) => isActive ? 
                        'activo' : 'normal'}>{c.nombre.replace(/_/g, ' ').toUpperCase()}
                    </NavLink>
                </li>
            )}
        </>
    )
}

export default Menu