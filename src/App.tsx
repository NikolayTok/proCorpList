import Todo from './components/Todo'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoDetail from './components/TodoDetail'
import { Context } from './context'
import { TaskTypes } from './types'
import TodoList from './components/TodoList'
import Subtask from './components/Subtask'

const App = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>([])

  const getTask = (newTask: TaskTypes) => {
    setTasks([...tasks, newTask])
  }


    const deleteTask = (id: number) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
  }
  
  return (
    <div>
      <Context.Provider value={{ tasks, getTask, deleteTask }}>
      <Todo />
        <div className="grid  grid-cols-3 gap-4 mt-4">
   
        <TodoList />
        <Routes>
          <Route path='/detail/:id' element={<TodoDetail />}></Route>
          <Route path='/subtask/:id' element={<Subtask />}></Route>
        </Routes>
        </div>
      </Context.Provider>
    </div>
  )
}

export default App
