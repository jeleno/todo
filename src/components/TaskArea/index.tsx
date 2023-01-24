import { useContext, useState } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { CustomClipboard } from '../CustomClipboard'
import { Task } from '../Task'
import {
  CompletedTasks,
  CreatedTasks,
  TaskAreaContainer,
  TaskAreaHeader,
} from './styles'

export function TaskArea() {
  const { tasks, deleteTask } = useContext(TasksContext)
  const [completedTasksCount, setCompletedTasksCount] = useState(0)

  function handleDeleteTask(taskToDelete: number) {
    deleteTask(taskToDelete)
  }

  function handleCheckTask(taskId: number) {
    setCompletedTasksCount(0)
  }

  const isTasksEmpty = tasks.length === 0

  return (
    <TaskAreaContainer>
      <TaskAreaHeader>
        <CreatedTasks>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </CreatedTasks>
        <CompletedTasks>
          <strong>Concluídas</strong>
          <span>{completedTasksCount}</span>
        </CompletedTasks>
      </TaskAreaHeader>
      <main>
        {isTasksEmpty ? (
          <CustomClipboard />
        ) : (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.description}
                completed={task.completed}
                onDeleteComment={handleDeleteTask}
                onCheckTask={handleCheckTask}
              />
            )
          })
        )}
      </main>
    </TaskAreaContainer>
  )
}
