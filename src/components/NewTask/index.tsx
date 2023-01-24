import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewTaskInputContainer, NewTaskInput, NewTaskButton } from './styles'
import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'

const newTaskSchema = z.object({
  description: z.string(),
})

type NewTaskInputs = z.infer<typeof newTaskSchema>

export function NewTask() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTaskInputs>({
    resolver: zodResolver(newTaskSchema),
  })

  const { createNewTask } = useContext(TasksContext)

  async function handleCreateNewTask(data: NewTaskInputs) {
    await createNewTask(data)
    reset()
  }

  return (
    <NewTaskInputContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <NewTaskInput
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('description')}
      />
      <NewTaskButton type="submit" disabled={isSubmitting}>
        Criar
        <PlusCircle size={20} />
      </NewTaskButton>
    </NewTaskInputContainer>
  )
}
