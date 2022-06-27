import React, { useEffect } from 'react'
import useAnalisis from '../hooks/useAnalisis';

export const Formulario = ({setPrestamo, setInteres, setPeriodo, setResultado, datos}) => {


    return (
    <div>
        <form  className='form' onSubmit={ ev =>{
            ev.preventDefault();
            setPrestamo(ev.target.prestamo.value);
            setInteres(ev.target.interes.value);
            setPeriodo(ev.target.periodo.value)

        }}>
            <div>
                <label htmlFor="prestamo">Prestamo inicial:</label>
                <input type='number' id="prestamo" name='prestamo' min="1000" max="100000" ></input>
            </div>

            <div>
                <label htmlFor="interes">Interes: </label>
                <input type='number' id='interes' name='interes'  min="0" max="20" step="1" defaultValue="5" ></input>
            </div>

            <div>
                <label htmlFor="periodo">Numero de periodos:</label>
                <input type='number' id='periodo' name='periodo' min={3} max={36} step="1"  ></input>
            </div>

            <button type='submit' onClick={

                useAnalisis(datos[0], datos[1], datos[2], setResultado)

            }>iniciar</button>
        </form>
    </div>
 )
}