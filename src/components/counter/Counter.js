import { useState } from "react"

const Counter = ({onAdd, stock, inicial = 1}) =>{
    const [cantidad, setCantidad] = useState(inicial)
    
    const handleChange = (e) =>{
        if(e.target.value <= stock && e.target.value > 0)
            setCantidad(e.target.value)
    }

    return(
        <div className='contador'>
            <p>Cantidad</p>          
            <input type='number' value={cantidad} onChange={handleChange}></input>            
            <div>
                {/* <button className="boton"></button> */}
                <button className="boton" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
       </div>
    )
}

export default Counter