import React from 'react';
import AddButton from '../components/AddButton';
import Nombres from '../components/Nombres';


const Datos = () => {

  return (
    <> 
      <h2>Analizador de Creditos</h2>
      <div className='enlaces'>
        <AddButton link="/MetodoFrances" text="Metodo de Analisis Frances"/>
        <AddButton link="/MetodoAleman" text="Metodo de Analisis Aleman"/>
        <AddButton link="/MetodoIngles" text="Metodo de Analisis Ingles" />
        <AddButton link="/MetodoFlat" text="Metodo de Analisis Flat" />
      </div>
      <Nombres/>
    </>
  )
}

export default Datos