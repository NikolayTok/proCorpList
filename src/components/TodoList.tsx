import { TaskTypes } from '../types'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context'


const TodoList = () => {
  const { tasks, deleteTask } = useContext(Context)

  return (
    <div className='container m-0 m-auto'>
      <ul className='rounded-lg'>
        {tasks.map((task: TaskTypes) => {
          return (
            <Link to={`/detail/${task.id}`}>
              <li
                className='flex rounded items-center justify-between p-3 bg-[#2599ff] mb-2'
                key={task.id}
              >
                {task.text}
                <div className='group text-center text-[1rem] p-2 bg-[#fff] rounded relative'>
                  ...
                  <div className='hidden group-hover:flex absolute top-[-19%] left-[30px] bg-[#cdd2d7] p-4 pl-[1.5rem]  rounded border-transparent '>
                    <button onClick={() => deleteTask(task.id)} className='text-red-500 mr-2'>Delete</button>
                    <button
                      onClick={async () => {
                        await navigator.clipboard.writeText(task.text)
                        alert('Copy')
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </li>
            
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
