import clipboard from '../../assets/clipboard.svg'
import { CustomClipboardContainer, CustomClipBoardText } from './styles'

export function CustomClipboard() {
  return (
    <CustomClipboardContainer>
      <img src={clipboard} alt="imagem clipboard" />
      <CustomClipBoardText>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </CustomClipBoardText>
    </CustomClipboardContainer>
  )
}
