import { useState,useEffect } from 'react';

import {GitItem} from './GitItem';
import { useFetchGifs } from "../hooks/useFetchGifs";
// import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const gifs = [1,2,3,4,5];+// no colocar funciones dentro
    //de un funcional component m porque siempre va a renderizar
    // const [counter, setCounter] = useState(10)
   
    //2 argumentos : una funcion y lista dependencias
    // string.mode en produccion no se disára 2 veces
  const {images , isLoading} = useFetchGifs(category);
  console.log({images,isLoading});
//custom hook
//{...image} tecnica para cuandos e tiene muchas propiedaes
    return (
    <>
        <h3>{category}</h3>
        

        {
          isLoading && (<h2>Cargando....</h2>) 
        }
      
       <div className="card-grid">
        { 
          images.map(( image ) => (
          // <li key={id}>{title}</li>
          <GitItem key={image.id} 
            { ...image }
          />
          ))
        }
        
       </div>
         {/* {   
            gifs.map(gif => (
                <p>{gif}</p>
            )

            )
         } */}
    </>
  )
}

