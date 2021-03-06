import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (inputValue.length > 2) {
			setCategories(categories => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder=""
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired
};

export default CategoryAdd;