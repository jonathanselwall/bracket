import styled, { css } from 'styled-components'

export const StyledSidebar = styled.aside<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: var(--header-height);
  z-index: 30;
  overflow: hidden;

  height: calc(100% - var(--header-height));
  width: 100%;
  max-width: 1000px;

  background-color: var(--color-bg-sidebar);
  border-left: 1px solid var(--color-border);

  visibility: hidden;
  transform: translateX(1000px);

  ${({ theme }) => theme.motion`
    transition: all var(--transition-duration-base);
  `}

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
      box-shadow: 5px 0px 50px 0px rgba(0, 0, 0, 0.7);
      visibility: visible;
    `};
`

export const Overlay = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 25;
  left: 0;
  top: var(--header-height);

  width: 100%;
  height: calc(100% - var(--header-height));

  background-color: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  opacity: 0;

  ${({ theme }) => theme.motion`
    transition: all var(--transition-duration-base);
  `}

  @supports (backdrop-filter: none) {
    backdrop-filter: blur(var(--blur));
    background-color: rgba(0, 0, 0, 0.15);
  }

  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

export const CloseButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  padding: var(--spacing-medium);
  margin-left: auto;
  cursor: pointer;
  opacity: 0.3;

  ${({ theme }) => theme.motion`
    transition: opacity var(--transition-duration-base);
  `}

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 1px solid var(--color-white);
    opacity: 1;
  }

  svg {
    fill: var(--color-white);
    width: 24px;
    height: 24px;
  }
`

export const Team = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
    max-width: 64px;
    margin-right: var(--spacing-medium);
    padding: var(--spacing-small);
  }
`

export const Content = styled.div``
