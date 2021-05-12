import Nav from '../components/Nav'
import Button from '../components/Button'
import Tasks from '../components/Tasks'
import { useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'

const TaskList = () => {
  const name = 'Max'
  const x = true

  const [showAddTask, setShowAddTask] = useState(false)

  const onClick = (el) => {
    console.log(el)
  }

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'A',
      day: '2020-01-25',
      reminder: true,
    },
    {
      id: 2,
      text: 'B',
      day: '2020-05-25',
      reminder: false,
    },
    {
      id: 3,
      text: 'C',
      day: '2019-05-25',
      reminder: false,
    },
  ])
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task,
      ),
    )
  }

  return (
    <div>
      <Nav title="CurrencyApp" />
      <div className="container">
        <h1>Hello world</h1>
        <h2>
          Hello {name} {1 + 1}
        </h2>
        {x ? 'Yes' : 'No'}
        <br />
        <button className="btn btn-primary">Press</button>
        <Button onClick={onClick} bgcolor="success" text="submit" />
        <Header
          title="Task Tracker"
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <br />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'Nothing'
        )}
      </div>
    </div>
  )
}

export default TaskList
