import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    //un hook es una funcion que retorna un objeto
   const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setisLoading(false);
    }
    
    useEffect( ()   => {
      getImages();
      
    },[])
//     return {
//     images:images,
//     isLoading:false
//   }
return {
    images,
    isLoading
  }
}
