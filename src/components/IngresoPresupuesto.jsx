import React from 'react';
import { useForm } from 'react-hook-form';

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
     const ingresoDato = () => {
        setPresupuesto(presupuesto);
        setIrPresupuestoTotal(true);
    }

    return (
        <div className='formulario' >
            <h1 className='tituloCaja'>Define Presupuesto</h1>
            <form className='padreFormulario' action="">
                <input className='cajaIngreso' placeholder='Digite presupuesto a gestionar' type="number" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                <button className='botonIngreso' onClick={ingresoDato}> Gestionar </button>
            </form>
        </div>
    )
}

export default IngresoPresupuesto;