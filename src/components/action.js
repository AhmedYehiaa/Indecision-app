import React, { Component } from 'react';

class Action extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do ?
        </button>
      </React.Fragment>
    );
  }
}

export default Action;