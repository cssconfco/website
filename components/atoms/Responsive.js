import ReactResponsive from 'react-responsive'

import { choices } from '../../utils/designTokens'

const maxXsScreen = Number(choices.screens.max.xs.replace('px', ''))
const maxLgScreen = Number(choices.screens.max.lg.replace('px', ''))
const minLgScreen = Number(choices.screens.lg.replace('px', ''))

const XSmall = props => <ReactResponsive {...props} maxWidth={maxXsScreen} />
const Mobile = props => <ReactResponsive {...props} maxWidth={maxLgScreen} />
const Desktop = props => <ReactResponsive {...props} minWidth={minLgScreen} />

const Responsive = () => null

Responsive.XSmall = XSmall
Responsive.Mobile = Mobile
Responsive.Desktop = Desktop

export default Responsive
