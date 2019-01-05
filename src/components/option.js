import React, { Component } from 'react';
class Option extends Component {
  render() {
    const { optionText } = this.props;
    return (
      <li>{optionText}</li>
    );
  }
}

export default Option;