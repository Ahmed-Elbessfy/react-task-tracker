import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState()

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:951/tasks")
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:951/tasks/${id}`)
    const data = await res.json()
    return data
  }
  useEffect(() => {
    // doesn't work
    // fetch("http://localhost:951/tasks")
    //   .then(res => {
    //     res.json();
    //     console.log(res)
    //   })
    //   .then(data => {
    //     // setTasks(res)
    //     console.log(data)
    //   })
    const getTasks = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }
    getTasks()
  }, [])

  const deleteTask = async (id) => {
    // delete on server
    await fetch(`http://localhost:951/tasks/${id}`,
      {
        method: "DELETE"
      })

    // delete locally
    let newTasks = [...tasks].filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const editReminder = async (id) => {
    // const fetchedTask = async (id) => {
    //   const res = await fetchTask(id)
    //   res.reminder = !res.reminder
    //   // console.log(res)
    //   fetch(`http://localhost:951/tasks/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(res)
    //   })
    // }
    // fetchedTask(id)
    const fetchedTask = await fetchTask(id)
    fetchedTask.reminder = !fetchedTask.reminder
    fetch(`http://localhost:951/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(fetchedTask)
    })
    setTasks(tasks.map(task => task.id === id ? fetchedTask : task))
  }

  const addTask = async (task) => {
    const newTasks = await fetch("http://localhost:951/tasks", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify(task)
    })
    // console.log(newTasks)
    const data = await newTasks.json()
    // console.log(data)

    setTasks([...tasks, data])
  }

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header toggleShowForm={ toggleShowForm } showForm={ showForm } />
        <Route path="/" exact render={ (props) => (
          <React.Fragment>
            { showForm && <AddTask addTask={ addTask } /> }
            <Tasks tasks={ tasks } deleteTask={ deleteTask } editReminder={ editReminder } />
          </React.Fragment>
        ) } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
