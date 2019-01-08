import React from 'react';

const AddOption = (props) => {
  return ( 
    <h1>
      <form className="add-option" onSubmit={props.handleAddOption}>
        <input className='add-option__input' placeholder="Does this work?" type="text" name="option" />
        <button className='button add-option__button'>Add Option</button>
      </form>
    </h1>
   );
}
 
export default AddOption;