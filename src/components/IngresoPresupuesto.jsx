import React from 'react';
import { useForm } from 'react-hook-form';

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
     const ingresoDato = () => {
        setPresupuesto(presupuesto);
        setIrPresupuestoTotal(true);
    }

    return (
        <div className='formulario' >
<<<<<<< HEAD
             <form className='padreFormulario' action="">
                <input type="number" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                <button onClick={ingresoDato}>Ingreso presupuesto</button>
=======
            <form className='padreFormulario' action="">
                <input type="number" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                <button type='button' onClick={ingresoDato}>Ingreso presupuesto</button>
>>>>>>> b93ddfbc78b0906c9728517c58c0c7ffe78bbb1c
            </form>
        </div>
    )
}

export default IngresoPresupuesto;