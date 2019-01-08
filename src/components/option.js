import React from 'react';

const Option = (props) => {
  const { optionText } = props;
  return (
    <div>
      {optionText}
      <button
        className='button button--link'
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
}

export default Option;