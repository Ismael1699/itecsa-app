import React, { useEffect, useState } from 'react';
import '../styles/Search.css';

const Search = ({ areaNamesData, handleSearch }) => {
	const [value, setValue] = useState('');
	const [filterData, setFilterData] = useState({});

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		const valueLowerCase = value.toLowerCase();
		const arrayFilter = areaNamesData.filter((item) => {
			if (valueLowerCase === '') {
				return item;
			} else {
				return item.includes(valueLowerCase);
			}
		});

		console.log(arrayFilter);
	}, [value, areaNamesData]);

	return (
		<form
			id='container-search'
			autoComplete='off'
			onSubmit={(e) => {
				handleSearch(e);
				setValue('');
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
