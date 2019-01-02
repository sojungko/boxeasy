import React, { Component, Fragment } from 'react';
import AsyncSelect from 'react-select/lib/Async';

const { GOOGLE_MAPS_API_KEY } = process.env;

const loadOptions = async (inputValue) => {
  const res = await fetch('/api/autosuggest', {
    method: 'POST',
    body: JSON.stringify(inputValue),
  });
  const resJson = await res.json();
};


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }

  render() {
    return (
      <Fragment>
        <pre>{this.state.inputValue}</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </Fragment>
    );
  }
}
