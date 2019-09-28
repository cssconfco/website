import css from 'styled-jsx/css'

import { choices, decisions } from './designTokens'
import fontFaces from './fontFaces'

export const titleStyles = `
  font-family: ${decisions.title.fontFamily};
  font-weight: ${decisions.title.fontWeight};
  line-height: ${choices.lineHeight.tight};
  text-transform: ${decisions.title.textTransform};
  color: ${decisions.title.color};
`

export const subtitleStyles = `
  font-family: ${decisions.subtitle.fontFamily};
  font-weight: ${decisions.subtitle.fontWeight};
  line-height: ${choices.lineHeight.tight};
  text-transform: ${decisions.subtitle.textTransform};
  color: ${decisions.subtitle.color.default};
`

export const paragraphStyles = `
  font-family: ${decisions.paragraph.fontFamily};
  font-weight: ${decisions.paragraph.fontWeight.normal};
  line-height: ${choices.lineHeight.normal};
  color: ${decisions.paragraph.color};
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
    height: ${choices.minHeight.full};
    background: ${choices.colors.white};
    font-size: ${choices.fontSize.base.mobile};
    ${paragraphStyles}
  }

  @media (${decisions.queries.screens.desktop}) {
    html,
    body {
      font-size: ${choices.fontSize.base.desktop};
    }
  }
`

export default globalStyles
