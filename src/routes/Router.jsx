import React from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AdminLayout from '../Layout/AdminLayout'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Productores from '../pages/Productores'
import Transportistas from '../pages/Transportistas'
import Clientes from '../pages/Clientes'
import { AuthProvider } from '../context/AuthProvider'


const Router = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          {/* Ruta publica */}
            <Route path='/'>
                <Route index element={<Login/>}/>
            </Route>
          {/* Ruta Protegida */}
            <Route path='/inicio' element={<AdminLayout/>}>
               <Route index element={<Inicio/>}/>
               <Route path='productores' element={<Productores/>}/>
               <Route path='transportistas' element={<Transportistas/>}/>
               <Route path='clientes' element={<Clientes/>}/>
            </Route>
        </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default Router