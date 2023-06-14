import React from "react";
import './Modal.css'

function Modal({setModal, handleDelete}) {

    return (
            <div className="modal">
                <h3>Czy na pewno chcesz usunąć?</h3>
                <button className="btn-modal" onClick={() => setModal(false)} >Anuluj</button>
                <button className="btn-modal" onClick={()=> handleDelete()} >Usuń</button>
            </div>
        )
}

export default Modal;