import { useEffect } from "react";
import { obtenerProductores } from "./helpers/getAdmin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavOverLay from "./components/Overlay";
import LoginPage from "./pages/P_Login";
import UserControlPage from "./pages/P_ControlUse";

import "./CSS/Global.css";
import "./CSS/P_Login.css";


function App() {
  useEffect(() => {
    const cargarProductores = async()=>{
      await obtenerProductores();
    }

    cargarProductores();
  }, )
  return (
    <BrowserRouter>
    <NavOverLay />
    <Routes>
      <Route path="/" element={<main className="App"></main>}/>
      <Route path="/Main" element={<main className="App"></main>}/>
      <Route path="/Login" element={<LoginPage /> }/>
      <Route path="/UserControl" element={<UserControlPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
