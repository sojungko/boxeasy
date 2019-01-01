import React, { Component } from 'react';
import App from '../src/App';
import Pickup from '../src/Pickup';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <App>
        <Pickup />
      </App>
    );
  }
}
