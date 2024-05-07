import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/Routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <h1>Hello World</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="neutral" />
      <Button /> */}
    </ThemeProvider>
  )
}
