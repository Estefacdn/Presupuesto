import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import IngresoPresupuesto from './components/IngresoPresupuesto';
import PresupuestoTotal from './components/PresupuestoTotal';
import plus from './components/img/plus.jpg';
import Modal from './components/Modal';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [irPresupuestoTotal, setIrPresupuestoTotal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleAdicionarGasto = () => {
    setIsOpenModal(true)
  };

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }
  return (
    <div className="App">
      <Header />
      {irPresupuestoTotal ? (<PresupuestoTotal presupuesto={presupuesto} />) : (<IngresoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} irPresupuestoTotal={irPresupuestoTotal} setIrPresupuestoTotal={setIrPresupuestoTotal} />)}
          {irPresupuestoTotal && (
        <div className="adicionar-gasto">
          <img src={plus} alt="plus"
            onClick={handleAdicionarGasto}
          />
        </div>
      )}
          <Modal
    isOpenModal={isOpenModal}
    closeModal={closeModal}
  />
  
    </div>
    
 
  );
 
  
}

export default App;
