import React, { Component } from 'react';
import Header from "./header";
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: ['Thing one', 'Thing two', 'Thing three'],
    selectedOption: undefined,
    error: ''
  }
  handleDeleteOptions = () => {
    this.setState({ options: [] });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (!option) {
      this.setState({
        error: "Enter valid value to add item"
      });
    } else if (this.state.options.indexOf(option) > -1) {
      this.setState({
        error: "This option already exists"
      });
    } else {
      const options = [...this.state.options];
      options.push(option);
      this.setState({ options, error: '' });
    }
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({selectedOption: option});
  };

  handleCloseModal = () => {
    this.setState({selectedOption: undefined});
  };
  
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a comuputer";
    const { options } = this.state;

    return (
      <React.Fragment>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        {this.state.error && <p>{this.state.error}</p>}
        <AddOption
          handleAddOption={this.handleAddOption} />
        <OptionModal 
          selectedOption = {this.state.selectedOption}
          handleCloseModal = {this.handleCloseModal}
        />
      </React.Fragment>
    );
  }
}

export default IndecisionApp;