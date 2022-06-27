import React, { useState } from "react";
import { Tabla } from "./Tabla";
import { Formulario } from "./Formulario";
import useAnalisis from '../hooks/useAnalisis';


const Datos= () => {

  const [prestamo, setPrestamo] = useState(0);
  const [interes, setInteres] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const [resultado, setResultado] = useState([
    {
      'id': 0, 
      'amortizacion': '', 
      'paInteres': '', 
      'paMensual': '', 
      'saldo': prestamo
    }]) 

  const datos = [prestamo, interes, periodo]


  return (
    <div className="container " align="center">
      
      <h2>Analizador de Creditos</h2>

      <Formulario 
        setPrestamo={setPrestamo}  
        setInteres={setInteres} 
        setPeriodo={setPeriodo} 
        setResultado={setResultado}
        datos={datos}
      />

      <h4>Tabla</h4>
      <Tabla resultado={resultado} />
        
    </div>
  )
}

export default Datos;