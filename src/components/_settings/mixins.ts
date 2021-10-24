import { css } from 'styled-components'
import { breakpoints } from './variables'

export const borderBoxFix = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

export const hideScrollBar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const disablePointerSelect = css`
  pointer-events: none;
  user-select: none;
`

// *** Media query mixin for simplified breakpoints *** //
// --------------------------------------
// Example with pre defined width:
// const MyStyledComponent = styled.div`
//   background-color: blue;
//   ${media.desktop`
//     background-color: red;
//   `}
// `
// --------------------------------------
// Example using the custom method
// const MyStyledComponent = styled.div`
//   background-color: blue;
//   ${media.custom('500px', () => `
//     background: red;
//   `)}
// `

type cssParams = Parameters<typeof css>
const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>

export const breakpoint = keys.reduce((acc, name) => {
  acc[name] = (...args: cssParams) => css`
    @media screen and (min-width: ${breakpoints[name]}) {
      ${css(...args)}
    }
  `
  return acc
}, {} as Record<keyof typeof breakpoints, Function>)

// *** Accessibility mixin for reduced motion *** //
// Make sure to wrap animations/transitions with this to ensure that
// users don't get any motion if they've disabled it in their OS.
// --------------------------------------
// Example:
// const MyStyledComponent = styled.div`
//   ${motion`
//     animation: ${test} 2s ease-in-out infinite;
//   `}
// `

export const motion = (...args: cssParams) => css`
  @media screen and (prefers-reduced-motion: no-preference) {
    ${css(...args)}
  }
`
