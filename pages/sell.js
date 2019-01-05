import React, { Component } from 'react';
import App from '../src/App';
import Sell from '../src/Sell';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <Sell />
      </App>
    );
  }
}
