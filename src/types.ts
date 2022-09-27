type TaskTypes = {
  id: number
  text: string
  date: string | number
  author: string
  subTask?: { id: number; text: string; date: string | number; author: string }
}
export type { TaskTypes }
