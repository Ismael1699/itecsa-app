import React from 'react';
import '../styles/MenuMobile.css';
import MenuMobileDropDown from './MenuMobileDropDown';
const MenuMobile = ({
	homePage,
	dashBoardPage,
	avancePage,
	estimacionesPage,
	dieselPage,
	menuButtonState,
	toggleMenuButton,
}) => {
	return (
		<div id='menumobile-container'>
			{menuButtonState ? (
				<MenuMobileDropDown
					homePage={homePage}
					dashBoardPage={dashBoardPage}
					avancePage={avancePage}
					estimacionesPage={estimacionesPage}
					dieselPage={dieselPage}
					toggleMenuButton={toggleMenuButton}
				/>
			) : (
				<i
					id='menu-icon'
					className='bi bi-three-dots'
					onClick={toggleMenuButton}
				></i>
			)}
		</div>
	);
};

export default MenuMobile;
