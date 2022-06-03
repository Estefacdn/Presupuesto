import React from 'react';
import '../Style/Modal.css'
import { useState } from 'react';


const Modal = ({ isOpenModal, closeModal }) => {

    return (
        <div className="">
            <div className={`modal ${isOpenModal && "modal-open"}`}>

                <div className="modal__header">
                    <h1>ADICIONAR GASTO</h1>
                </div>
                <form className="form-modal">
                    <label>Nombre del gasto </label>
                    <input type="text" />

                    <label>Cantidad de presupuesto </label>
                    <input type="number" />

                    <label>Tipo de gasto </label>
                    <select />
                    <option />

                    <input type="submit" />
                </form>
                <div className="modal__footer">
                    <a className="button-modal" onClick={closeModal}>Cancelar</a>
                </div>
            </div>
        </div>

    )
}

export default Modal