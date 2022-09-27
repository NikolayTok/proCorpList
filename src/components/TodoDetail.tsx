import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { TaskTypes } from '../types'
import Subtask from './Subtask'

const TodoDetail = () => {
  const { id } = useParams()
  const { tasks } = useContext(Context)
  const [togglePopup, setTogglePopup] = useState(false)
  const [subtaskDetail, setSubtaskDetail] = useState<any>()

  const handleBtn = () => {
    setTogglePopup(!togglePopup)
  }

  useEffect(() => {
    if (id) {
      setSubtaskDetail(tasks[id].SubTask)
    }
    return ()=>{
      setSubtaskDetail([])
    }
  }, [tasks, id, subtaskDetail])

  return (
    <div className='flex'>
      {tasks ? (
        <div className='bg-red'>
          <div>
            <h2>{id ? tasks[id].author : null}</h2>
            <span>{id ? tasks[id].date : null}</span>
            <span>Task c. {id ? tasks[id].id + 1 : null}</span>
            <button
              onClick={handleBtn}
              className='block items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500'
            >
              Subtask
            </button>
          </div>
          {togglePopup ? <Subtask /> : null}
        </div>
      ) : (
        'lox'
      )}

      {subtaskDetail ? (
        <div className='bg-red'>
          <div>
            <h2>{subtaskDetail[0].text}</h2>
          </div>
        </div>
      ) : (
        'subtask : 0'
      )}
    </div>
  )
}
export default TodoDetail
