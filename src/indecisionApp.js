import React, { Component } from 'react';
import Header from "./components/header";
import Action from './components/action';
import Options from './components/options';
import AddOption from './components/addOption';

class IndecisionApp extends Component {
  state = {}
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a comuputer";
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <React.Fragment>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <Action />
        <Options
          options={options}
        />
        <AddOption />
      </React.Fragment>
    );
  }
}

export default IndecisionApp;