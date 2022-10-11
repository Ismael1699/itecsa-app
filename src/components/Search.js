import React, { useState } from 'react';
import '../styles/Search.css';

const Search = ({ handleSearch }) => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const dontRefresh = (e) => {
		e.preventDefault();
		setValue('');
		console.log('se envio los datos');
	};

	return (
		<form
			id='container-search'
			onSubmit={(e) => {
				dontRefresh(e);
				handleSearch(value);
			}}
		>
			<input
				type='text'
				id='input-search'
				placeholder='¿A dónde quieres ir?'
				value={value}
				onChange={handleChange}
			></input>
			{/* <h1>Search</h1> */}
			<i className='bi bi-search'></i>
		</form>
	);
};

export default Search;
