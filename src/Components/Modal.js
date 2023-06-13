import React from "react";
import './Modal.css'

function Modal({setModal, setDelete}) {

    return (
            <div className="modal">
                <h3>Czy na pewno chcesz usunąć?</h3>
                <button className="btn-modal" onClick={() => setModal(false)} >Anuluj</button>
                <button className="btn-modal" onClick={()=> setDelete(false)} >Usuń</button>
            </div>
        )
}

export default Modal;