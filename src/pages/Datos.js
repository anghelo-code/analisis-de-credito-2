import React from 'react';
import AddButton from '../components/AddButton';
import Nombres from '../components/Nombres';


const Datos = () => {

  return (
    <> 
      <h2>Analizador de Créditos</h2>
      <div className='enlaces'>
        <AddButton link="/MetodoFrances" text="Método de Análisis Francés"/>
        <AddButton link="/MetodoAleman" text="Metodo de Análisis Alemán"/>
        <AddButton link="/MetodoIngles" text="Metodo de Análisis Inglés" />
        <AddButton link="/MetodoFlat" text="Metodo de Análisis Flat" />
      </div>
      <Nombres/>
    </>
  )
}

export default Datos