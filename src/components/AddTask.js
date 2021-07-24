import { useState } from 'react'
import { PropTypes } from 'prop-types'

function AddTask({ addTask }) {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleChange = e => {
    e.target.id === 'text' && setText(e.target.value)
    e.target.id === "day" && setDay(e.target.value)
    e.target.id === "reminder" && setReminder(!reminder)
  }

  const addNewTask = (e) => {
    e.preventDefault()
    if (!text || !day) {
      alert("please enter task and date!")
      return
    }
    addTask({ id: Math.floor(Math.random() * 10000), text: text, day: day, reminder: reminder })
    setText("")
    setDay("")
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={ addNewTask }>
      <div className="form-control">
        <label htmlFor="text">Task: </label>
        <input type="text" id="text" placeholder="Add Task" value={ text } onChange={ handleChange } />
      </div>
      <div className="form-control">
        <label htmlFor="day">Task: </label>
        <input id="day" type="text" placeholder="Due Date" value={ day } onChange={ handleChange } />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Reminder :  </label>
        <input type="checkbox" id="reminder" checked={ reminder } onChange={ handleChange } />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  )
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask

