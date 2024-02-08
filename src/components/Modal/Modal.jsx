import style from "./Modal.module.css"
import { useState } from 'react'

export default function Modal() {

    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("activeModal")
    } 
    else {
        document.body.classList.remove("activeModal")
    }

    return (
        <>
            <button className={style.btn} onClick={toggleModal}>
                Open
            </button>

            {modal && (
                <div className={style.modal}>
                <div className={style.overlay} onClick={toggleModal}></div>
                <div
                  className={style.modalContent}>
                    <h2>Hello modal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fuga vitae? Consequuntur sequi doloribus veritatis reiciendis eaque perspiciatis repellat fugit.</p>
                </div>

            </div>
            )}
        </>
    )
}
