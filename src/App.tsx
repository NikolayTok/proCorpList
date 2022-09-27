import Todo from './components/Todo'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TodoDetail from './components/TodoDetail'
import { Context } from './context'
import { TaskTypes } from './types'
import TodoList from './components/TodoList'

const App = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>([])
  const nav = useNavigate()
  const getTask = (newTask: TaskTypes) => {
    setTasks([...tasks, newTask])
  }

  const getSubtask = (id: number, newSubtask: TaskTypes) => {
    setTasks((prevState) =>
      prevState.map((item, index : number) => {
        console.log(item.id)
        console.log(+id)
        return item.id === +id ? { ...item, SubTask: [newSubtask] } : item 
      })
    )
  }

  const deleteTask = (id: number) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
    nav('/')
  }

  useEffect(() => {}, [tasks])
  return (
    <div>
      <Context.Provider value={{ tasks, getTask, deleteTask, getSubtask }}>
        <Todo />
        <div className='grid  grid-cols-3 gap-4 mt-4'>
          <TodoList />
          <Routes>
            <Route path='/detail/:id' element={<TodoDetail />}></Route>
          </Routes>
        </div>
      </Context.Provider>
    </div>
  )
}

export default App
