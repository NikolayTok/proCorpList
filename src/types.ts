type TaskTypes = {
  id: number
  text: string
  date: string | number
  author: string
  SubTask?: [
    { id: number; text: string; date: string | number; author: string }
  ]
}
export type { TaskTypes }
