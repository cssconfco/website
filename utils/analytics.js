import ReactGA from 'react-ga'
import { config } from '../config/client'

export const initGA = () => {
  console.log('GA', 'Initialized!')
  ReactGA.initialize(config.googleAnalyticsId)
}
export const logPageView = () => {
  console.log('GA', `Page viewed ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = ({
  category = '',
  action = '',
  label = '',
  value = 1
}) => {
  if (category && action) {
    ReactGA.event({ category, action, label, value })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
