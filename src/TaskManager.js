import './taskManager.css'
import Task from './Task'
import React, {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import AddTask from './AddTask'
import Header from './header'
import Footer from './footer'

// import signinout from '../components'

function TaskManager() {
  
  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  
  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
// controls the list page or dashboard
// after opening header tag is all the code for the header nav would like to replace it with a simple call to a header file
// need both header and footer to be horizontal
// home goes to a brief home page
// login goes to a pop up 
// need register page for name, google creds so goes into database
// replace orders with an about page
  return (
    <div id="container">
    <Header />
        <div className='taskManager__container'>
          <button 
            onClick={() => setOpenAddModal(true)}>
            Add Project +
          </button>
          <div className='taskManager__tasks'>

            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                completed={task.data.completed}
                title={task.data.title} 
                budget={task.data.budget} // <--added this one
                description={task.data.description}

              />
            ))}

          </div>
          <Footer />
          </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }


    </div>
  )
}
 
  
export default TaskManager