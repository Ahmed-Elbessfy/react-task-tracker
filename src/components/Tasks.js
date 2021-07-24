import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, deleteTask, editReminder }) => {
  return (
    <ul>
      {
        tasks && tasks.length > 0 ? tasks.map(task => <Task key={ task.id } task={ task } deleteTask={ deleteTask } editReminder={ editReminder } />) : "Nothing To show here"
      }
    </ul>
  )
}
Tasks.defaultProps = {

}
Tasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
}

export default Tasks
