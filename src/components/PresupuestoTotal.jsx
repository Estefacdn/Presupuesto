import React from 'react'
import torta from '../components/img/torta.png'
export const PresupuestoTotal = ({ presupuesto }) => {
    return (
        <>
            <div className='muestra'>
                <div>
                    PresupuestoTotal:{presupuesto}
                </div>
                <div className='imagen'>
                    <img src={torta} alt="" />
                </div>
            </div>
        </>
    )
}

export default PresupuestoTotal;