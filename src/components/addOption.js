import React from 'react';

const AddOption = (props) => {
  return ( 
    <h1>
      <form onSubmit={props.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </h1>
   );
}
 
export default AddOption;