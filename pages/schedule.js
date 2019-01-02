import React, { Component } from 'react';
import App from '../src/App';
import Schedule from '../src/Schedule';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <Schedule />
      </App>
    );
  }
}
