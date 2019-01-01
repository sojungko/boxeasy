import React, { Component } from 'react';
import App from '../src/App';
import Terms from '../src/Terms';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <Terms />
      </App>
    );
  }
}
