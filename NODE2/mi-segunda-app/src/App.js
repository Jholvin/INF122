import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from "react";

function App() {
  const [nroClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click");
  }

  const clickMas3 = () => {
    setNumClicks(nroClicks + 3);
    console.log("Click");
  }

  const clickMenos3 = () => {
    setNumClicks(nroClicks - 3);
    console.log("Click");
  }

  const clickMenos = () => {
    setNumClicks(nroClicks - 1);
    console.log("Click");
  }

  const reiniciar = () => {
    setNumClicks(0);
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks} />
        <div className='contenedor-botones'>
          <Boton texto="-3" esBotonclick={true} functionClick={clickMenos3} />
          <Boton texto="+3" esBotonclick={true} functionClick={clickMas3} />
          <Boton texto="-1" esBotonclick={true} functionClick={clickMenos} />
          <Boton texto="+1" esBotonclick={true} functionClick={click} />
          <Boton texto="Reiniciar" esBotonclick={false} functionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;
