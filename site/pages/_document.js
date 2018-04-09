import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body style={{margin: 0}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}