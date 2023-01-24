import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TasksProvider } from './contexts/TasksContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TasksProvider>
          <Router />
        </TasksProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
