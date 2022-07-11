import './modal.css'
import React from 'react'

function Modal({open, modalLabel, children, custom_modal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div className='modalContainer' onClick={handleClose}>
        <div className= {`modal ${custom_modal}`}>
          <div className='modal__head'>
            <h2>{modalLabel}</h2>
            <span className='modal__close' onClick={onClose}>x</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal