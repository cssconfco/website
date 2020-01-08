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

const focusStyles = `
  border: 1px solid transparent !important;
  box-shadow: 1px 1px 5px ${choices.colors.blue[400]},
    1px 1px 10px 5px ${choices.colors.blue[200]};
  outline: 2px solid ${choices.colors.blue[600]} !important;
`

export const checkboxStyles = css.global`
  [type='checkbox'] {
    opacity: 0; // Hide it
    position: absolute; // Take it out of document flow
  }

  [type='checkbox'] + label {
    ${paragraphStyles}
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: ${decisions.paragraph.fontSize.sm};
    padding: 0;
    position: relative;
  }

  // Box
  [type='checkbox'] + label:before {
    background: ${choices.colors.white};
    border: 1px solid ${choices.colors.gray[300]};
    content: '';
    display: inline-block;
    height: 15px;
    left: 1px;
    margin-right: 10px;
    position: relative;
    transition: box-shadow 0.2s;
    vertical-align: text-top;
    width: 15px;
  }

  // Box hover
  [type='checkbox']:hover + label:before {
    ${focusStyles}
    border: 1px solid transparent;
  }

  // Box focus
  [type='checkbox']:focus + label:before {
    ${focusStyles}
    border: 1px solid transparent;
  }

  // Box checked
  [type='checkbox']:checked + label:before {
    background: ${choices.colors.brand.cinnabar};
    border: 1px solid transparent;
    outline: 2px solid ${choices.colors.brand.cinnabar};
  }

  // Disabled state label.
  [type='checkbox']:disabled + label {
    color: ${choices.colors.gray[300]};
    cursor: auto;
  }

  // Disabled box.
  [type='checkbox']:disabled + label:before {
    background: ${choices.colors.gray[300]};
    box-shadow: none;
  }

  // Checkmark. Could be replaced with an image
  [type='checkbox']:checked + label:after {
    background: ${choices.colors.white};
    box-shadow: 2px 0 0 ${choices.colors.white}, 4px 0 0 ${choices.colors.white},
      4px -2px 0 ${choices.colors.white}, 4px -4px 0 ${choices.colors.white},
      4px -6px 0 ${choices.colors.white}, 4px -8px 0 ${choices.colors.white};
    content: '';
    height: 2px;
    left: 4px;
    position: absolute;
    transform: rotate(45deg);
    width: 2px;
  }
`

export const formStyles = css.global`
  [type='text'],
  [type='tel'],
  [type='email'],
  [type='number'],
  [type='password'] {
    ${paragraphStyles}
    font-size: ${decisions.paragraph.fontSize.sm};
    border: 1px solid ${choices.colors.gray[400]};
    font-weight: lighter;
    height: 55px;
    padding: 5px 15px;
    transition: box-shadow 0.2s;
    width: 100%;
  }

  input::placeholder {
    color: ${choices.colors.gray[400]};
  }

  form a {
    border: 1px solid transparent;
  }

  a:focus,
  button:focus,
  :not(.react-select__input) > input:focus {
    ${focusStyles}
  }
`

export const reactSelectStyles = css.global`
  div.react-select__control {
    background: transparent;
    border: 1px solid ${choices.colors.gray[400]};
    border-radius: 0;
    cursor: text;
    height: 55px;
  }

  div.react-select__control:hover {
    border: 1px solid ${choices.colors.gray[400]};
  }

  div.react-select__control--is-focused {
    ${focusStyles}
  }

  .react-select__value-container {
    ${paragraphStyles}
    font-size: ${decisions.paragraph.fontSize.sm};
    position: initial !important;
    height: 55px;
    padding-left: 15px;
    padding-right: 15px;
  }

  div.react-select__control .react-select__placeholder {
    ${paragraphStyles}
    color: ${choices.colors.gray[300]};
  }

  div.react-select__control .react-select__indicator-separator {
    background: ${choices.colors.gray[300]};
  }

  div.react-select__control .react-select__indicators {
    cursor: pointer;
  }
`

export const initialStyles = css.global`
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

  a {
    display: inline-block;
  }

  @media (${decisions.queries.screens.desktop}) {
    html,
    body {
      font-size: ${choices.fontSize.base.desktop};
    }
  }
`
