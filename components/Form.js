import crypto from 'crypto'
import { useState } from 'react'
import Task from '../helpers/task.helper'
const uuid = () => crypto.randomBytes(4).toString('hex')
export default function Form(props) {
  const [task, setTask] = useState('')
  const { updateTasks } = props
  const addTask = () => {
    if (!task) return
    const newTask = new Task(uuid(), task)
    updateTasks((tasks) => [...tasks, newTask])
    setTask('')
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
  }
  return (
    <section className="m-3 flex w-3/4 font-body">
      <div className="container flex gap-2 items-baseline  w-full justify-center">
        <div className="m-5 flex gap-2 w-2/4">
          <input
            type="text"
            id="task-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? addTask() : null)}
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={addTask.bind(this)}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
