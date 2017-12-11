import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document'

import { AppRegistry } from 'react-native';

export default class MyDocument extends Document {

  static async getInitialProps ({renderPage}) {
    AppRegistry.registerComponent('Main', () => Main);
    const { stylesheets } = AppRegistry.getApplication('Main');
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks, stylesheets };
  }

  render () {
    return (
      <html lang="en">
        <Head>
          {this.props.stylesheets}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
