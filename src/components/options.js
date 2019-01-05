import React from 'react';
import Option from './option';

const Options = (props) => {
  const { options, handleDeleteOptions } = props;
  return (
    <React.Fragment>
      <button onClick={handleDeleteOptions}>Remove All</button>
      <ul>
        {options.map(option => <Option key={option} optionText={option} />)}
      </ul>
    </React.Fragment>
  );
}

export default Options;