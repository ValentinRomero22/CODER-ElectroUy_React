import { useEffect, useState } from "react"

export const useAsync = (funcionAsincronica, dependencia = []) => {
    const [data, setData] = useState()
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        setCargando(true)

        funcionAsincronica().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setCargando(false)
        })
        
    }, dependencia)

    return{
        cargando, 
        data, 
        error
    }
}