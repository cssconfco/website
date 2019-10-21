import App, { Container as NextContainer } from 'next/app'

import GoogleAnalytics from '../components/layout/GoogleAnalytics'
import globalStyles from '../utils/globalStyles'

export default class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <NextContainer>
        <GoogleAnalytics>
          <Component {...pageProps} />
          <style jsx global>
            {globalStyles}
          </style>
        </GoogleAnalytics>
      </NextContainer>
    )
  }
}
