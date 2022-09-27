import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { TaskTypes } from '../types'
import Subtask from './Subtask'

const TodoDetail = () => {
  const { id = 0 } = useParams()
  const { tasks } = useContext(Context)
  const [taskDetail, setTaskDetail] = useState<TaskTypes>()

  useEffect(() => {
    setTaskDetail(tasks[id])

    console.log(tasks[id].date)

  }, [tasks, id])

  const handleBtn = () => {
    return <Subtask/>
  }

  return (
    <div className='bg-red'>
        

        <div>
          <h2>{tasks[id].author}</h2>
          <span>{tasks[id].date}</span>
          <span>Task c. {tasks[id].id + 1}</span>
          <button onClick={handleBtn} className='block items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500'>Subtask</button>
        </div>
    </div>
  )
}
export default TodoDetail
