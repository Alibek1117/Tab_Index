import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div onClick={closeModal} className='modal-backdrop'>
        <div className="modal">
           <h3>Not Found</h3>
           <button onClick={closeModal}  className="btnn">Close</button>
        </div>
    </div>
  )
}

export default Modal