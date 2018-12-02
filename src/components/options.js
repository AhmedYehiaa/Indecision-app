import React, { Component } from 'react';
import Option from './option';
class Options extends Component {
 
  render() {
    const { options } = this.props;
    return (
      <React.Fragment>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <ul>
          {options.map(option => <Option key={option} optionText={option} />)}
        </ul>
      </React.Fragment>
    );
  }
}

export default Options;