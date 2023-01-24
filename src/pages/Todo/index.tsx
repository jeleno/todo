import { NewTask } from '../../components/NewTask'
import { TaskArea } from '../../components/TaskArea'
import { TodoContainer } from './styles'

export function Todo() {
  return (
    <TodoContainer>
      <NewTask />
      <TaskArea />
    </TodoContainer>
  )
}
