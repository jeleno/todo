import styled from 'styled-components'

export const NewTaskInputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;
  margin-top: -1.7rem;
`

export const NewTaskInput = styled.input`
  background: ${(props) => props.theme['gray-500']};
  border: 0;
  border-radius: 8px;
  width: 100%;
  height: 3.375rem;
  padding: 1rem;
  resize: none;

  color: ${(props) => props.theme.white};
`

export const NewTaskButton = styled.button`
  background: ${(props) => props.theme['blue-dark']};
  border: 0;
  border-radius: 8px;
  height: 3.375rem;
  padding: 1rem;
  resize: none;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    transition: background-color 0.1s;
  }
`
