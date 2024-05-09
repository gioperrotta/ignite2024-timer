import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
// import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/Routes'
import { CyclesContextProvider } from './contexts/CyclesContext'
// import { ExplicacaoContexto } from './ExplicacaoContexto'

export function App() {
  return (
    // <ThemeProvider theme={defaultTheme}>
    //   <GlobalStyle />
    //   <ExplicacaoContexto />
    // </ThemeProvider>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
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
