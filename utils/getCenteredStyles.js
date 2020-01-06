const getCenteredStyles = (isCentered, defaultStyles = {}) =>
  isCentered
    ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }
    : defaultStyles

export default getCenteredStyles
