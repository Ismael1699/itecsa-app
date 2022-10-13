import React from 'react';

const SuggestList = ({ filterData }) => {
	return (
		<>
			<ul>
				{filterData.map((item, id) => (
					<li key={`filtro${id}`}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default SuggestList;
