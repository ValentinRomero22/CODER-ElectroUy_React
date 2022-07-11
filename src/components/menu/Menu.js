import { NavLink } from 'react-router-dom'

const Menu = ({categorias}) =>{
    /* console.log(categorias) */
    return(
        <>
            {categorias.map(c =>
                <li>
                    <NavLink key={c} to='/categoria/tecnologia' className={({isActive}) => isActive ? 
                    'activo' : 'normal'}>{c.nombre.toUpperCase}</NavLink>
                </li>
            )}
        </>
    )
}

export default Menu