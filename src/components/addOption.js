import React, { Component } from 'react';
class AddOption extends Component {
  handleAddOption(e) {
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
    e.preventDefault();
  };

  render() {
    return (
      <h1>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </h1>
    );
  }
}

export default AddOption;