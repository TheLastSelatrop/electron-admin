import { useEffect } from "react";
import { obtenerProductores } from "./helpers/getAdmin";
import NavOverLay from "./Fragments/Overlay";
import LoginPage from "./Fragments/P_Login";
import "./CSS/Pagina_Login.css";
import "./CSS/Pagina_Inicio.css";

function App() {
  useEffect(() => {
    const cargarProductores = async()=>{
      await obtenerProductores();
    }

    cargarProductores();
  }, )
  return (
    <main className="App"> 
      <NavOverLay />
      
      <LoginPage />
    </main>

      


  );
}

export default App;
