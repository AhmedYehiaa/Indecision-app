import React from 'react';

const Option = (props) => {
  const { optionText } = props;
  return <li>{optionText}</li>;
}

export default Option;