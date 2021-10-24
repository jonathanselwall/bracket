import styled from 'styled-components'

const Lines = styled.div`
  position: absolute;
  flex: 1;
  height: calc(50% + 1px);
  width: 20px;
  right: 30px;
  top: calc(25% - 10px);

  border-top: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--color-bracket-line);

  &::after {
    content: '';
    position: absolute;
    top: calc(50%);
    left: 20px;
    display: block;
    width: 20px;
    border-bottom: 1px solid var(--color-bracket-line);
  }
`

export default Lines
