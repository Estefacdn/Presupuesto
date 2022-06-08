import React from 'react';
import { useForm } from 'react-hook-form';

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
     const ingresoDato = () => {
        setPresupuesto(presupuesto);
        setIrPresupuestoTotal(true);
    }

    return (
        <div className='formulario' >
            <form className='padreFormulario' action="">
                <input type="number" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                <button onClick={ingresoDato}>Ingreso presupuesto</button>
            </form>
        </div>
    )
}

export default IngresoPresupuesto;