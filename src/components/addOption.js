import React, { Component } from 'react';
class AddOption extends Component {

  render() {
    return (
      <h1>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" />
          <button >Add Option</button>
        </form>
      </h1>
    );
  }
}

export default AddOption;