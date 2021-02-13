import App, { Container as NextContainer } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'

Router.onRouteChangeStart = () => {
  nprogress.start()
}
Router.onRouteChangeComplete = () => {
  nprogress.done()
}
Router.onRouteChangeError = () => {
  nprogress.done()
}

import Footer from '../components/organisms/Footer'
import GoogleAnalytics from '../components/layout/GoogleAnalytics'

import {
  initialStyles,
  formStyles,
  checkboxStyles,
  reactSelectStyles,
  nprogressStyles
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
            <title>CSS Conf Colombia 2021 — A CSS Lovers Conference</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="The CSS Conf is a worldwide organization dedicated to holding conferences for designers, programmers and web interface creators."
            />
          </Head>
          <div className="wrapper">
            <Component {...pageProps} />
            <div className="push" />
          </div>
          <Footer />
          <style jsx>{`
            .wrapper {
              min-height: 100%;
              margin-bottom: -80px;
            }

            :global(#__next) {
              height: 100%;
            }

            .push,
            :global(.footer) {
              height: 80px;
            }
          `}</style>
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
          <style jsx global>
            {nprogressStyles}
          </style>
        </GoogleAnalytics>
      </NextContainer>
    )
  }
}
