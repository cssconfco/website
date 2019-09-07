import css from 'styled-jsx/css'

import { theme, tokens } from './designTokens'
import fontFaces from './fontFaces'

export const titleStyles = `
  font-family: ${tokens.title.fontFamily};
  font-weight: ${tokens.title.fontWeight};
  line-height: ${theme.lineHeight.tight};
  text-transform: ${tokens.title.textTransform};
  color: ${tokens.title.color};
`

export const subtitleStyles = `
  font-family: ${tokens.subtitle.fontFamily};
  font-weight: ${tokens.subtitle.fontWeight};
  line-height: ${theme.lineHeight.tight};
  text-transform: ${tokens.subtitle.textTransform};
  color: ${tokens.subtitle.color.default};
`

export const copyStyles = `
  font-family: ${tokens.copy.fontFamily};
  font-weight: ${tokens.copy.fontWeight.normal};
  line-height: ${theme.lineHeight.normal};
  color: ${tokens.copy.color};
`

const globalStyles = css.global`
  ${fontFaces}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
    ${titleStyles}
  }

  h5,
  h6 {
    margin: 0;
    padding: 0;
    ${subtitleStyles}
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: ${theme.minHeight.full};
    background: ${theme.colors.white};
    font-size: ${theme.fontSize.base.mobile};
    ${copyStyles}
  }

  @media (${tokens.queries.screens.desktop}) {
    html,
    body {
      font-size: ${theme.fontSize.base.desktop};
    }
  }
`

export default globalStyles
