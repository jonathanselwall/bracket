import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { borderBoxFix } from './mixins'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${borderBoxFix}
  
  :root {
    ${variables}
  }

  body {
    font-family: var(--font-family)
  }
`

export default GlobalStyle
