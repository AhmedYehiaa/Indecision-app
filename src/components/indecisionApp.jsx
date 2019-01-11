import React, { Component } from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: ['Thing one', 'Thing two', 'Thing three'],
    selectedOption: undefined,
    error: '',
  }

  handleDeleteOptions = () => {
    this.setState({ options: [] });
  };

  handleDeleteOption = (optionText) => {
    const { options: AllOptions } = this.state;
    const options = [...AllOptions];
    const filteredOptions = options.filter(option => option !== optionText);
    this.setState({ options: filteredOptions });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const { options: AllOptions } = this.state;
    const option = e.target.elements.option.value.trim();
    if (!option) {
      this.setState({
        error: 'Enter valid value to add item',
      });
    } else if (AllOptions.indexOf(option) > -1) {
      this.setState({
        error: 'This option already exists',
      });
    } else {
      const options = [...AllOptions];
      options.push(option);
      this.setState({ options, error: '' });
    }
    e.target.elements.option.value = '';
  };

  handlePick = () => {
    const { options: AllOptions } = this.state;
    const randomNum = Math.floor(Math.random() * AllOptions.length);
    const option = AllOptions[randomNum];
    this.setState({ selectedOption: option });
  };

  handleCloseModal = () => {
    this.setState({ selectedOption: undefined });
  };

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a comuputer';
    const { options, selectedOption, error } = this.state;

    return (
      <React.Fragment>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <div className="container">
          <Action
            hasOptions={options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            {error && <p className="add-option-error">{error}</p>}
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </React.Fragment>
    );
  }
}

export default IndecisionApp;
