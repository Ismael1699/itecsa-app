import React from 'react';
import Search from './Search';
import '../styles/TopBarWeb.css';

const TopBarWeb = ({ handleSearch }) => {
	return (
		<div id='container-topbarweb'>
			<Search handleSearch={handleSearch} />
			<div id='container-user-setting'>
				<div className='box-icon'>
					<i className='bi bi-gear-fill'></i>
				</div>
				<div className='box-icon'>
					<i className='bi bi-person-circle'></i>
				</div>
			</div>
		</div>
	);
};

export default TopBarWeb;
