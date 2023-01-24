import styled from 'styled-components'

export const CustomClipboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`

export const CustomClipBoardText = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme['gray-300']};
`
