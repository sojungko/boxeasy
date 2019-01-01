import React, { Component } from 'react';
// import logo from '../static/logo.svg';
import Head from 'next/head';
import Header from './Header';

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {children}
      </div>
    );
  }
}
