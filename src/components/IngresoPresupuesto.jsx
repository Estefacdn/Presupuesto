import React from 'react'

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
    const ingresoDato = () => {
        setPresupuesto(presupuesto);
        setIrPresupuestoTotal(true);
    }
    return (
        <div className='formulario' >
            <form className='padreFormulario' action="">
                <input type="number" value={presupuesto} onChange ={(e)=>setPresupuesto(e.target.value)} />
                <button type='button' onClick={ingresoDato}>Ingreso presupuesto</button>
            </form>
        </div>
    )
}

export default IngresoPresupuesto;