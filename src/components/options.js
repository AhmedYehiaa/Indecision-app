import React, { Component } from 'react';
import Option from './option';
class Options extends Component {
  render() {
    const { options } = this.props;
    return (
      <React.Fragment>
        <ul>
          {options.map(option => <Option key = {option} optionText={option} />)}
        </ul>
      </React.Fragment>
    );
  }
}

export default Options;