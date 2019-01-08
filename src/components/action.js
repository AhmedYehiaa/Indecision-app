import React from 'react';

const Action = (props) => {
  const { hasOptions, handlePick } = props;
  return (
    <React.Fragment>
      <button
        className='big-button'
        disabled={!hasOptions}
        onClick={handlePick}
      >
        What should I do ?
      </button>
    </React.Fragment>

  );
};

export default Action;