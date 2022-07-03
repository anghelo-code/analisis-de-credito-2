import React, { useState } from "react";
import { Tabla } from "../components/Tabla";
import { Formulario } from "../components/Formulario";
import useAnalisisAleman from '../hooks/useAnalisisFlat';
import useAnalisisFlat from "../hooks/useAnalisisFlat";



const MetodoFlat = () => {

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
      
      <h2>Analizador Metodo Aleman</h2>

      <div>
        <form className='form' onSubmit={ ev =>{
          ev.preventDefault();
          setPrestamo(ev.target.prestamo.value);
          setInteres(ev.target.interes.value);
          setPeriodo(ev.target.periodo.value)
        }}>
          
          <Formulario />

          <button type='submit' onClick={
            useAnalisisFlat(datos[0], datos[1], datos[2], setResultado)
          }>iniciar</button>
          
        </form>
      </div>
        

      <h4>Tabla</h4>
      <Tabla resultado={resultado} />
        
    </div>
  )
}

export default MetodoFlat;