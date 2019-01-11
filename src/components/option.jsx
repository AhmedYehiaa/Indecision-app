import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { optionText, count, handleDeleteOption } = props;

  return (
    <div className="option">
      <p className="option__text">
        {count}
        {' '}
        {optionText}
      </p>
      <button
        type="button"
        className="button button--link"
        onClick={() => handleDeleteOption(optionText)}
      >
        remove

      </button>
    </div>
  );
};

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
