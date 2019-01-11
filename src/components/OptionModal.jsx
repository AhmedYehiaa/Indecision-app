import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, handleCloseModal } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleCloseModal}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button type="button" className="button" onClick={handleCloseModal}>Okay</button>
    </Modal>
  );
};

OptionModal.defaultProps = {
  selectedOption: undefined,
};

OptionModal.propTypes = {
  selectedOption: PropTypes.string,
  handleCloseModal: PropTypes.func.isRequired,
};

export default OptionModal;
