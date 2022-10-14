import React from 'react';
import '../styles/SuggestList.css';

const SuggestList = ({ filterData, handleLink, isFocus, value }) => {
	return (
		<>
			<ul>
				{filterData.length === 0 && isFocus && value.length > 0 ? (
					<li>not found</li>
				) : (
					''
				)}
				{filterData.map((item, id) => (
					<li key={`filtro${id}`} onClick={handleLink}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default SuggestList;
