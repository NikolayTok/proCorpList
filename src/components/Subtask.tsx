import { useEffect, useState, useContext } from 'react'
import React from 'react'
import { Context } from '../context'
import { useParams, Link } from 'react-router-dom'

const Subtask = () => {
  const { tasks, getSubtask } = useContext(Context)
  const [inputValue, setInputValue] = useState('')
  const { id } = useParams()

  useEffect(() => {}, [tasks])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='container m-0 m-auto'>
      <form
        className='flex gap-4 items-center justify-center'
        action=''
        onSubmit={(e) => {
          e.preventDefault()
          const newSubtask = {
            id: tasks.length,
            text: inputValue,
            date: new Date().toLocaleString(),
            author: 'Mykola'
          }
          
          if (inputValue.trim() !== '') {
            getSubtask(id, newSubtask)
            setInputValue('')
          } else {
            alert('Missing text in input')
          }
        }}
      >
        <input
          onChange={(e) => handleInput(e)}
          className='rounded-md border-2 bg-red-300 py-4 px-10 text-center'
          value={inputValue}
          type='text'
          name='task'
        />
        <button
          className='block items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  )
}
export default Subtask
