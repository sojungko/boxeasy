import React, { Component } from 'react';
import App from '../src/App';
import About from '../src/About';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <About />
      </App>
    );
  }
}
