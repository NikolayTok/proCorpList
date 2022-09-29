import Todo from './components/Todo'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TodoDetail from './components/TodoDetail'
import { Context } from './context'
import { TaskTypes } from './types'
import TodoList from './components/TodoList'

const tasksStorage = () => {
  const tasks = localStorage.getItem('tasks')
  if (tasks) {
    return JSON.parse(tasks)
  }
}

const App = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>(tasksStorage())
  const nav = useNavigate()
  const getTask = (newTask: TaskTypes) => {
    setTasks([...tasks, newTask])
  }

  const getSubtask = (id: number, newSubtask: TaskTypes) => {
    setTasks((prevState) =>
      prevState.map((item, index: number) => {
        return item.id === +id ? { ...item, SubTask: [newSubtask] } : item
      })
    )
  }

  const deleteTask = (id: number) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
    nav('/')
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
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
