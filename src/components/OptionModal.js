import React from 'react'
import Modal from 'react-modal';

export default function OptionModal(props) {
    const { selectedOption, handleCloseModal } = props;
    return (
        <Modal
            isOpen={!!selectedOption}
            contentLabel={selectedOption || ''}
            onRequestClose={handleCloseModal}
        >
            {selectedOption && <p>{selectedOption}</p>}
            <button onClick={handleCloseModal}>Close</button>
        </Modal>
    );
}
