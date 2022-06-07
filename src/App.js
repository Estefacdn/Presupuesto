import { useState } from 'react';
import './App.css';
import Grafica from './components/Grafica';
import Header from './components/Header';
import IngresoPresupuesto from './components/IngresoPresupuesto';
import PresupuestoTotal from './components/PresupuestoTotal';
import plus from './components/img/plus.jpg';
import Modal from './components/Modal';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [irPresupuestoTotal, setIrPresupuestoTotal] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false)
  const [gastos, setGastos] = useState([]);

  const nuevoGasto = (gasto) => {
    setGastos([...gastos, gasto])
  }


  return (
    <div className="App">

      <Header />
      {abrirModal && (<Modal nuevoGasto={nuevoGasto} closeModal={setAbrirModal} />)}
      {irPresupuestoTotal ? (<PresupuestoTotal presupuesto={presupuesto} />) : (<Grafica />) && (<IngresoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} irPresupuestoTotal={irPresupuestoTotal} setIrPresupuestoTotal={setIrPresupuestoTotal} />)}
      {irPresupuestoTotal && (
        <div className="adicionar-gasto">
          <button className='openModal' onClick={() => { setAbrirModal(true) }}>Enviar</button>
        </div>
      )}





    </div>
  );

}

export default App;
