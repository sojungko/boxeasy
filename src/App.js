import React, { Component } from 'react';
// import logo from '../static/logo.svg';
import Head from 'next/head';
import Header from './Header';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Boxeasy - Sell and buy used boxes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {children}
      </div>
    );
  }
}
