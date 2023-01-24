import todoLogo from '../../assets/todo-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={todoLogo} alt="Logotipo do Ignite" />
    </HeaderContainer>
  )
}
