import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    //cada uno puede manejar su propio hos state
  const [inputValue, setinputValue] = useState('')
    // const onInputChange = (event) => {
    //     console.log(event.target.value);
    //     // setinputValue('Hola Mundo')
    //     setinputValue(event.target.value);
    // }
    const onInputChange = ({target}) => {
        //console.log(target.value);
        // setinputValue('Hola Mundo')
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);
        // setinputValue('Hola Mundo')
        // setinputValue(event.value);
        //evita que ingresen datos vacios o 1 char
        if(inputValue.trim().length <= 1) return;
            
        
        //setCategories(categories => [inputValue,...categories]);
        // cambia el estado a vacio despues de insertar
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
  return (
    // <form onSubmit={(event) => onSubmit(event) }>
    <form onSubmit={onSubmit}>
        <input 
        //propiedades
                type="text" 
                placeholder='Buscar gits'
                value={inputValue}
                onChange={onInputChange}
                // onChange={(event) => onInputChange(event)}
            
        />
    </form>
   
  )
}
