import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>CSS Conf Colombia</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/favicons/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
