import styled from 'styled-components'
import { hideScrollBar } from '../_settings/mixins'

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    flex: 1;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    color: #b1b1ba;
    letter-spacing: 0.1em;
  }
`

export const StyledBracket = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-xl);
`

export const Prev = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: var(--spacing-xl);
  margin: var(--spacing-large) 0;
`

export const Grouping = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
