import React from 'react';
import MenuMobile from './MenuMobile';
import '../styles/NavMobile.css';
import { Component, useState } from 'react';

const NavMobile = () => {
	const [menuButtonState, setMenuButtonState] = useState(false);

	const toggleMenuButton = () => {
		setMenuButtonState(!menuButtonState);
		console.log(menuButtonState);
	};

	return (
		<div id='Navmobile'>
			<MenuMobile toggleMenuButton={toggleMenuButton} />
			<p>Home</p>
			<i id='user-icon' className='bi bi-person-circle'></i>
		</div>
	);
};

export default NavMobile;
