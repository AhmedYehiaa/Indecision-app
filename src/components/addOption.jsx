import React from 'react';
import PropTypes from 'prop-types';

const AddOption = (props) => {
  const { handleAddOption } = props;
  return (
    <h1>
      <form className="add-option" onSubmit={handleAddOption}>
        <input className="add-option__input" placeholder="Does this work?" type="text" name="option" />
        <button type="submit" className="button add-option__button">Add Option</button>
      </form>
    </h1>

  );
};

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
