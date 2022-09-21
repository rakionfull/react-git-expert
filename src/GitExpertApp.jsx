import { useState } from "react";
import {AddCategory,GifGrid} from './components'

export const GitExpertApp = () => {
// no se puede colocar hookls dentro de una condicional
    const [categories, setCategories] = useState(['One Punch']);
    
    // console.log(categories);
    const onAddCategory = (NewCategory) => {
      
        // categories.push('LOL');
        //no uysar push, para nio mutar
        if(categories.includes(NewCategory)) return;
       setCategories([NewCategory,...categories]);
      //  setCategories(cat  => [...cat,'valorant']);
    }
  return (
    <>
    {/* titulo */}
    <h1>GitExpertApp</h1>
    {/* input  componente separado*/}

    {/* enviar propiedades al componente  y tmb funciones*/}
    <AddCategory 
    // setCategories={setCategories}
    //on es un evento
    //propiedad de un componente
      // onNewCategory={ event => onAddCategory(event) }
      onNewCategory={ onAddCategory }

    />
    {/* lostado de gits */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}
    {/* <ol> */}
        {
        // categories.map( category => {
        //   // return   (<li key={category}>{category}</li>) ;
        //   return (
        //     <div key={category}>
        //         <li>{category}</li>
        //     </div>
        //   )
        // })
        // categories.map( category =>(
        //     <div key={category}>
        //         <li>{category}</li>
        //     </div>
        //   )
        // )
            categories.map( category =>(
              <GifGrid key={category} 
                        category={category}/>
            ))
        }
        
       
    {/* </ol> */}
    {/* gititem */}
    </>
  )
}
// vXcpZLB6RLvw4cXNrLpX1HNLbU3B7h7H
