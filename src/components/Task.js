import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task card p-3 ${task.reminder ? 'bg-info' : 'bg-white'}`}
      onDoubleClick={() => onToggle(task.id)}
      style={{ cursor: 'pointer' }}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          className="float-right"
          style={{ cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
