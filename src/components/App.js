import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Datos from '../pages/Datos'
import MetodoAleman from '../pages/MetodoAleman'
import MetodoFrances from '../pages/MetodoFrances'
import MetodoIngles from '../pages/MetodoIngles'

const App = () => {
  return (
    <div className='app'>
      <Routes>
          <Route path='/'  element={ <Datos/>}/>
          <Route path='/MetodoFrances'  element={ <MetodoFrances/>}/>
          <Route path='/MetodoAleman'  element={ <MetodoAleman/>}/>
          <Route path='/MetodoIngles'  element={ <MetodoIngles/>}/>
      </Routes>

    </div>
  )
}

export default App