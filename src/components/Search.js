import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import SuggestList from './SuggestList';

const Search = ({ areaNamesData, handleSearch }) => {
	const [value, setValue] = useState('');
	const [filterData, setFilterData] = useState([]);
	const [isFocus, setIsFocus] = useState(false);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const hadleFocus = () => {
		setIsFocus(true);
	};

	const handleBlur = () => {
		setTimeout(() => setIsFocus(false), 200);
	};

	const handleLink = (e) => {
		const content = e.target.text;
		console.log('se presiono');
		setValue('');
	};

	useEffect(() => {
		const valueLowerCase = value.toLowerCase();
		const arrayFilter = areaNamesData.filter((item) => {
			return valueLowerCase === ''
				? false
				: item.includes(valueLowerCase);
		});
		setFilterData(arrayFilter);
	}, [value, areaNamesData]);

	return (
		<form
			className={`container-search ${
				isFocus ? 'search-show' : 'search-hidde'
			}`}
			autoComplete='off'
			onSubmit={(e) => {
				handleSearch(e);
				setValue('');
			}}
		>
			<div className='container-input'>
				<input
					type='text'
					className='input-search'
					placeholder='¿A dónde quieres ir?'
					value={value}
					onChange={handleChange}
					onFocus={hadleFocus}
					onBlur={handleBlur}
				></input>
				<i className='bi bi-search'></i>
			</div>
			{isFocus && value.length > 0 ? (
				<SuggestList
					filterData={filterData}
					handleLink={handleLink}
					isFocus={isFocus}
					value={value}
				/>
			) : (
				''
			)}
		</form>
	);
};

export default Search;
