import Modal from "./Modal"
import './taskItem.css'
import React from 'react'

function TaskItem({onClose, open, title, budget, description}) {
//added budget
  return (
    <Modal modalLabel='Project' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${budget}</p>
      </div>
    </Modal>
  )
}

export default TaskItem