import styled from 'styled-components'

export const TaskAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
  margin-top: 4rem;
  justify-content: space-between;

  main {
    border-top: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 8px;
  }
`

export const TaskAreaHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    padding: 0.125rem 0.625rem 0.125rem 0.625rem;
    margin-left: 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 999px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
  }
`

export const CreatedTasks = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    color: ${(props) => props.theme.blue};
  }
`

export const CompletedTasks = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    color: ${(props) => props.theme.purple};
  }
`
