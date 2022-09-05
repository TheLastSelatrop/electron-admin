
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from '../Layout/AdminLayout'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Productores from '../pages/Productores'
import Transportistas from '../pages/Transportistas'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Login/>}/>
            </Route>
            <Route path='/inicio' element={<AdminLayout/>}>
               <Route index element={<Inicio/>}/>
               <Route path='productores' element={<Productores/>}/>
               <Route path='transportistas' element={<Transportistas/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default Router