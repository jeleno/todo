import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Task {
  id: number
  description: string
  completed: boolean
  completedAt?: string
  createdAt: string
}

interface NewTaskInputs {
  description: string
}

interface TasksContextType {
  tasks: Task[]
  fetchTasks: (query?: string) => Promise<void>
  createNewTask: (data: NewTaskInputs) => Promise<void>
  deleteTask: (id: number) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  async function fetchTasks(query?: string) {
    const response = await api.get('tasks', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTasks(response.data)
  }

  async function createNewTask(data: NewTaskInputs) {
    const { description } = data

    const response = await api.post('tasks', {
      description,
      completed: false,
      completedAt: null,
      createdAt: new Date(),
    })

    setTasks((state) => [response.data, ...state])
  }

  async function deleteTask(id: number) {
    await api
      .delete(`tasks/${id}`)
      .then(() => {
        const tasksWhitoutDeletedOne = tasks.filter((task) => {
          return task.id !== id
        })

        setTasks(tasksWhitoutDeletedOne)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        createNewTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
