import { useEffect } from "react";
import { obtenerProductores } from "./helpers/getAdmin";


function App() {
  useEffect(() => {
    const cargarProductores = async()=>{
      await obtenerProductores();
    }

    cargarProductores();
  }, )
  return (
    <div className="App">
        <h1>Hola</h1>
    </div>
  );
}

export default App;
