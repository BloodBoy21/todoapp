import { useEffect } from 'react'
import NewTask from '../helpers/task.helper'
import Task from './Task'
function Tasks(props) {
  const { tasks, updateTasks } = props
  useEffect(() => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'))
    const tasks = localTasks ?? [{ _id: 1, data: 'Learn React' }]
    updateTasks(tasks.map((task) => new NewTask(task._id, task.data)))
  }, [updateTasks])
  const updadeList = (id) => {
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(tasks.filter((task) => task.id !== id))
    )
  }
  return (
    <section className="m-10 p-5 flex flex-col gap-3 w-[45%] font-body  place-items-center  overflow-y-auto box-border  h-full">
      {tasks.map((task) => (
        <Task
          key={task.id}
          data={task.data}
          id={task.id}
          updateTasks={updateTasks}
          updateList={updadeList}
        />
      ))}
    </section>
  )
}

export default Tasks
