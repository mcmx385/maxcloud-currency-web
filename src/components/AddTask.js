import { useState } from 'react'
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!Text) {
      alert('Please input task name')
      return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Datetime</label>
        <input
          type="text"
          placeholder="Add Datetime"
          className="form-control"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Reminder</label>
          </div>
          <div className="col">
            <input
              type="checkbox"
              placeholder="Add Reminder"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  )
}
export default AddTask
