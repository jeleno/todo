import { Trash } from 'phosphor-react'
import { CircleCheckBox } from '../CircleCheckBox'
import { TaskContainer } from './styles'

interface TaskProps {
  id: number
  content: string
  completed: boolean
  onDeleteComment: (id: number) => void
  onCheckTask: (id: number) => void
}

export function Task({
  id,
  content,
  completed,
  onDeleteComment,
  onCheckTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteComment(id)
  }

  return (
    <TaskContainer>
      <CircleCheckBox />
      <p>{content}</p>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </TaskContainer>
  )
}
