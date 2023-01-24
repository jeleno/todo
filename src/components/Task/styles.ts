import styled from 'styled-components'

export const TaskContainer = styled.div`
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.225rem;

  display: flex;
  align-items: flex-start;

  p {
    color: ${(props) => props.theme['gray-100']};
    flex: 1;
  }

  label {
    margin: 2px -15px 0 0;
  }

  button {
    background: transparent;
    border: 0;
    color: var(--gray-300);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;

    &:hover {
      color: ${(props) => props.theme.danger};
    }
  }
`
