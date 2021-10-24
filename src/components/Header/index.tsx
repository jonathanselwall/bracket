import styled from 'styled-components'
import Logo from '../Logo'

const StyledHeader = styled.header`
  position: relative;
  z-index: 35;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  background-color: var(--color-bg-main);
  border-bottom: 1px solid var(--color-border);
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}

export default Header
