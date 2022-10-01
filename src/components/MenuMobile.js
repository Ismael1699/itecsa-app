import React from 'react';
import '../styles/MenuMobile.css';
const MenuMobile = ({ toggleMenuButton }) => {
	return (
		<div id='menumobile-container' onClick={toggleMenuButton}>
			<i id='menu-icon' className='bi bi-three-dots'></i>
		</div>
	);
};

export default MenuMobile;
