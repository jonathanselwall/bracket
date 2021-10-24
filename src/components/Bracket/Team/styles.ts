import styled, { css } from 'styled-components'
import { disablePointerSelect } from '../../_settings/mixins'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledTeam = styled.div<{ winner?: boolean; isHovered?: boolean }>`
  position: relative;
  z-index: 20;

  padding-right: var(--spacing-small);
  padding-left: var(--spacing-medium);

  background-color: var(--color-black);
  cursor: pointer;

  ${({ isHovered }) =>
    isHovered &&
    css`
      background-color: #222226;
    `}

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 6px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-border);
  }

  + div {
    ${Container} {
      border-top: 1px solid var(--color-border);
    }
  }

  ${({ winner }) =>
    winner &&
    css`
      &::after {
        background: linear-gradient(
          180deg,
          var(--color-orange) 0%,
          var(--color-red) 100%
        );
      }
    `}
`

export const Information = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-medium);
  ${disablePointerSelect}

  .team-logo {
    margin-right: var(--spacing-medium);
    width: 100%;
    max-width: 32px;
  }

  .team-name {
    font-weight: var(--font-weight-medium);
    color: var(--color-white);
  }
`

export const Points = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-left: 1px solid var(--color-border);
  width: 64px;

  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);

  ${disablePointerSelect}
`
