import { useEffect, useState } from "react";

export default function useDatos() {
    const [dat, setDatos] = useState([])
  
    useEffect(() => {

      fetch("json/datos.json")
        .then(response => response.json())
        .then(datos => {
          setDatos(datos['datos'])
        })
    }, [])
  
    return dat;
}

