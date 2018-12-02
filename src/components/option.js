import React, { Component } from 'react';
class Option extends Component {
  render() {
    const { optionText } = this.props;
    return (
      <li>Option: {optionText}</li>
    );
  }
}

export default Option;