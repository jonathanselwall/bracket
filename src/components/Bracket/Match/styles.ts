import styled, { keyframes } from 'styled-components'
import { disablePointerSelect, breakpoint } from '../../_settings/mixins'
import Button from '../../Button'

export const EditContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100%;
  visibility: hidden;
  will-change: transform, visibility;

  ${({ theme }) => theme.motion`
    transition: all var(--transition-duration-base);
  `}
`

export const EditButton = styled(Button)`
  height: 100%;
  width: 40px;
  margin-left: var(--spacing-small);
  background-color: var(--color-black-darker);
  will-change: color;

  ${({ theme }) => theme.motion`
    transition: color var(--transition-duration-base);
  `}

  svg {
    fill: var(--color-white);
    width: 24px;
    opacity: 0.3;
    will-change: opacity;
    ${({ theme }) => theme.motion`
      transition: opacity var(--transition-duration-base);
    `}
  }

  &:hover,
  &:focus {
    svg {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 1px solid var(--color-white);
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  min-width: var(--match-width);
  background-color: var(--color-black);
`

export const StyledMatch = styled.div`
  position: relative;

  &:first-child {
    margin-bottom: var(--spacing-medium);
  }

  &:hover,
  &:focus,
  &:focus-within {
    ${EditContainer} {
      visibility: visible;
      transform: translateX(calc(40px + var(--spacing-small)));

      ${({ theme }) => theme.motion`
        transition: all var(--transition-duration-base);
      `}
    }
  }

  &:focus-visible {
    outline: 1px solid var(--color-white);
  }
`

const pulse = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Playing = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  bottom: -24px;

  font-size: var(--font-size-small);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--color-white);

  ${disablePointerSelect}

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: var(--spacing-small);
    background-color: var(--color-red);
    border-radius: 50%;
    ${({ theme }) => theme.motion`
      animation: ${pulse} 2s ease-in-out infinite;
    `}
  }
`
