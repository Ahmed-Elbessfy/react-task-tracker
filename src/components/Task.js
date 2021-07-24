import PropTypes from 'prop-types'
import { AiFillCloseCircle } from "react-icons/ai";
const Task = ({ task, deleteTask, editReminder }) => {
  const deleteOneTask = () => {
    deleteTask(task.id)
  }
  const toggleReminder = () => {
    editReminder(task.id)
  }
  return (
    <div className={ `task ${task.reminder && "reminder"}` } onDoubleClick={toggleReminder}>
      <h3>
        { task.text }
        <AiFillCloseCircle style={{color: 'red', cursor: "pointer", fontSize:'1.8rem'}} onClick={deleteOneTask} />
      </h3>
      <p>{ task.day }</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
}

export default Task
