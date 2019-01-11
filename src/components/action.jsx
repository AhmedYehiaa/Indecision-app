import React from 'react';
import PropTypes from 'prop-types';

const Action = (props) => {
  const { hasOptions, handlePick } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        className="big-button"
        disabled={!hasOptions}
        onClick={handlePick}
      >
        What should I do ?

      </button>
    </React.Fragment>

  );
};

Action.propTypes = {
  hasOptions: PropTypes.bool.isRequired,
  handlePick: PropTypes.func.isRequired,
};

export default Action;
