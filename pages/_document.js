import Document, { Html, Head, Main, NextScript } from 'next/document';

class CsDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="cs">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CsDocument;
