import Modal from "./Modal"
import React, {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

// import header from '../components/header'
function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [budget, setBudget] = useState('') // <-- added
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        budget: budget, // <--added this
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

//added budget
  return (
    <Modal modalLabel='Add Project' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title} placeholder='Enter title'/>
        <input type='number' name='budget' onChange={(e) => setBudget(e.target.value)} 
          value={budget} placeholder='Enter a project budget amount'/>  
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task description'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask