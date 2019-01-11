import React from 'react';
import Option from './option';

const Options = (props) => {
	const { options, handleDeleteOptions, handleDeleteOption } = props;
	return (
		<React.Fragment>
			<div className="widget-header">
				<h3 className="widget-header__title">Your Options</h3>
				<button
					className='button button--link'
					onClick={handleDeleteOptions}>
          Remove All
				</button>
			</div>
			<ul className='options'>
				{options.map((option, index) => (
					<Option
						key={index}
						optionText={option}
						handleDeleteOption={handleDeleteOption}
						count={index + 1}
					/>)
				)}
			</ul>
		</React.Fragment>
	);
};

export default Options;