import React from 'react';
import PropTypes from 'prop-types';
import Option from './option';

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;
  return (
    <React.Fragment>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          type="button"
          className="button button--link"
          onClick={handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      <ul className="options">
        {options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
            count={index + 1}
          />))}
      </ul>
    </React.Fragment>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Options;
