import styled from 'styled-components'
import { disablePointerSelect } from '../_settings/mixins'

const StyledLogo = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.4em;
  color: var(--color-white);
  ${disablePointerSelect}

  &::after {
    content: '.';
    display: inline-block;
    font-size: 36px;
    color: var(--color-orange);
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
  }
`

const Logo = () => {
  return <StyledLogo>Bracket</StyledLogo>
}

export default Logo
