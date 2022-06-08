import React from 'react'
//import torta from '../components/img/torta.png';
import { Pie } from 'react-chartjs-2';
export const PresupuestoTotal = ({ presupuesto }) => {
   /*  const data=(
        dataSets[{
            data:[presupuesto]
        }]
    ) */

    const opcion={
        responsive: true
    }
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
               {/*  <div className='imagen'>
                     <Pie data={data}  options={opcion}/>
                </div> */}
            </div>
        </>
    )
}

export default PresupuestoTotal;