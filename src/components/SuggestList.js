import React from 'react';

const SuggestList = ({ filterData }) => {
	const handleLink = (e) => {
		const content = e.target.text;
		console.log(content);
	};
	return (
		<>
			<ul>
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
