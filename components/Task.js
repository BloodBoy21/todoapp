import { useState } from 'react'
function Task(props) {
  const { data, updateTasks, id, updateList } = props
  const [done, setDone] = useState(false)
  const taskDone = (e) => {
    setDone(!done)
    setTimeout(() => {
      updateTasks((tasks) => tasks.filter((task) => task.id !== id))
      updateList(id)
    }, 300)
  }
  return (
    <section
      id={`task-${id}`}
      className="flex flex-col w-[90%]  items-center bg-white rounded-sm shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-[#13333e] dark:hover:bg-[#304c57] box-border">
      <div className="flex justify-between p-4 leading-normal w-full flex-wrap box-border">
        <input
          id={`task-${id}-done`}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={!done ? taskDone : () => {}}
        />
        <div className="container box-border w-11/12">
          <p
            htmlFor={`task-${id}-done`}
            className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 break-words">
            {data}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Task
