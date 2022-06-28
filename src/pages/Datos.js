import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddButton from '../components/AddButton';
import MetodoAleman from './MetodoAleman';
import MetodoIngles from './MetodoIngles';
import MetodoFrances from './MetodoFrances';

const Datos = () => {

  return (
    <> 
      <h2>Analizador de Creditos</h2>
      <div className='enlaces'>
        <AddButton link="/MetodoFrances" text="Metodo de Analisis Frances"/>
        <AddButton link="/MetodoAleman" text="Metodo de Analisis Aleman"/>
        <AddButton link="/MetodoIngles" text="Metodo de Analisis Ingles" />
      </div>
    </>
  )
}

export default Datos