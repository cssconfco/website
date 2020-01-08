import App, { Container as NextContainer } from 'next/app'
import Head from 'next/head'

import GoogleAnalytics from '../components/layout/GoogleAnalytics'
import {
  initialStyles,
  formStyles,
  checkboxStyles,
  reactSelectStyles
} from '../utils/globalStyles'

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
          <Head>
            <title>CSS Conf Colombia 2020 — A CSS Lovers Conference</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="The CSS Conf is a worldwide organization dedicated to holding conferences for designers, programmers and web interface creators."
            />
          </Head>
          <Component {...pageProps} />
          <style jsx global>
            {initialStyles}
          </style>
          <style jsx global>
            {formStyles}
          </style>
          <style jsx global>
            {checkboxStyles}
          </style>
          <style jsx global>
            {reactSelectStyles}
          </style>
        </GoogleAnalytics>
      </NextContainer>
    )
  }
}
