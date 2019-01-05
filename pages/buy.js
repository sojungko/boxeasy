import React, { Component } from 'react';
import App from '../src/App';
import Buy from '../src/Buy';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <Buy />
      </App>
    );
  }
}
