import { useState } from 'react';
import './App.css';
import Grafica from './components/Grafica';
import Header from './components/Header';
import IngresoPresupuesto from './components/IngresoPresupuesto';
import PresupuestoTotal from './components/PresupuestoTotal';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [irPresupuestoTotal, setIrPresupuestoTotal] = useState(false);
  return (
    <div className="App">
      <Header/>
      {irPresupuestoTotal ?(<PresupuestoTotal presupuesto={presupuesto}/>):(  <IngresoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} irPresupuestoTotal={irPresupuestoTotal} setIrPresupuestoTotal={setIrPresupuestoTotal}/>)}
      <Grafica/>
    </div>
  );
}

export default App;
