import React from 'react';
import Modal from 'react-modal';

export default function OptionModal(props) {
	const { selectedOption, handleCloseModal } = props;
	return (
		<Modal
			isOpen={!!selectedOption}
			onRequestClose={handleCloseModal}
			contentLabel="Selected Option"
			closeTimeoutMS={200}
			className='modal'
		>
			<h3 className='modal__title'>Selected Option</h3>
			{selectedOption && <p className='modal__body'>{selectedOption}</p>}
			<button className='button' onClick={handleCloseModal}>Okay</button>
		</Modal>
	);
}
