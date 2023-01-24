import { CircleCheckBoxContainer } from './styles'

export function CircleCheckBox() {
  function handleCheckTask() {
    // onCheckTask(id)
  }

  return (
    <CircleCheckBoxContainer>
      <input type="checkbox" onClick={handleCheckTask} />
      <span></span>
    </CircleCheckBoxContainer>
  )
}
