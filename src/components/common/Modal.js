import React from 'react'
import AuthForm from './AuthForm';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../app/modalReducer'

function Modal() {
    const openModal = useSelector(state => state.modal.openModal)
    const dispatch = useDispatch();

    return (
        <div className={openModal ? 'modal-container modal-container--open' : 'modal-container'}>
            <div className="modal-container__close" onClick={() => dispatch(closeModal())}></div>
            <div className="modal">
                <AuthForm />
            </div>
        </div>
    )
}

export default Modal;