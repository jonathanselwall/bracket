import { css } from 'styled-components'

export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  large: '1200px',
}

const font = css`
  --font-family: 'Roboto', Arial, Helvetica, sans-serif;
  --font-size-small: 12px;
  --font-size-base: 16px;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
`

const spacing = css`
  --spacing-xs: 4px;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;
  --spacing-xl: 64px;
`

const color = css`
  --color-white: #ffffff;
  --color-black: #1d1e21;
  --color-black-darker: #191a1e;
  --color-red: #e83030;
  --color-orange: #ff3d00;

  --color-border: #2d2e33;
  --color-bracket-line: #403c40;
  --color-bg-main: #26272c;
  --color-bg-sidebar: var(--color-black-darker);
  --color-bg-table-row: #1f2024;
  --color-bg-number-input: #1f2024;
`

const element = css`
  --match-width: 400px;
  --header-height: 130px;
`

const motion = css`
  --blur: 6px;
  --transition-duration-base: 300ms;
`

const variables = css`
  ${font}
  ${spacing}
  ${color}
  ${element}
  ${motion}
`

export default variables
