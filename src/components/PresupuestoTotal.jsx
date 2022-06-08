import React from 'react'
import torta from '../components/img/torta.png'
export const PresupuestoTotal = ({ presupuesto }) => {
    return (
        <>
            <div className='muestra'>
                <div className='tituloPresupuesto'>
                    <p>
                        Total presupuesto: col {presupuesto}
                    </p>
                    <p>
                        Disponible: col 0
                    </p>
                    <p>
                        Gastado: col 0
                    </p>

                </div>
                <div className='imagen'>
                    <img src={torta} alt="" />
                </div>
            </div>
        </>
    )
}

export default PresupuestoTotal;