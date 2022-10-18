import React from 'react';
import MenuMobile from './MenuMobile';
import '../styles/NavMobile.css';
import { Component, useState } from 'react';
import user from '../img/user.jpeg';

const NavMobile = ({
	homePage,
	dashBoardPage,
	avancePage,
	estimacionesPage,
	dieselPage,
	loadPage,
}) => {
	const [menuButtonState, setMenuButtonState] = useState(false);

	const toggleMenuButton = () => {
		setMenuButtonState(!menuButtonState);
	};

	return (
		<div id='Navmobile'>
			<MenuMobile
				homePage={homePage}
				dashBoardPage={dashBoardPage}
				avancePage={avancePage}
				estimacionesPage={estimacionesPage}
				dieselPage={dieselPage}
				menuButtonState={menuButtonState}
				toggleMenuButton={toggleMenuButton}
			/>
			<p>{loadPage}</p>
			<div className='img-navmobile'>
				<img src={user}></img>
			</div>
			{/* <i id='user-icon' className='bi bi-person-circle'></i> */}
		</div>
	);
};

export default NavMobile;
