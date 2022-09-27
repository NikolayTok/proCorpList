import React from 'react'
import { TaskTypes } from './types'

interface TypeContext {
  tasks: TaskTypes[];
  getTask: (newTask: TaskTypes) => void
}

export const Context = React.createContext<any>([])
