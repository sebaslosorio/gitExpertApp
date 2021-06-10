import React, { Fragment } from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])
    const {data : images,loading} = useFetchGif(category)
    // El useEffect sirve para ejecutar una sola vez una determinada accion y que no renderice de nuevo todo el componente
    // esto se utiliza cuando se deben de inicializar componentes con datos de API u otros componentes o acciones de funciones propias
    // El useEffect recibe dos parametros, 1 es la funcion que yo quiero ejecutar y el 2 es un arreglo de dependecias sin dependencia el useEffect
    // solo se dispara una sola vez
    
    return (
        <Fragment>
        <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
        { loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-grid">
        {
            images.map( img => (
                <GifGridItem
                    key={img.id}
                    img={img}
                    title={img.title}
                    url={img.url}
                />
            ))
        }
        </div>
    </Fragment>
    )
}
