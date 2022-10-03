import React, { useEffect } from 'react';
import NavMobile from './NavMobile';
import NavWeb from './NavWeb';

const Nav = ({
	displayWidth,
	homePage,
	dashBoardPage,
	avancePage,
	estimacionesPage,
	dieselPage,
}) => {
	return (
		<>
			{displayWidth > 600 ? (
				<NavWeb
					homePage={homePage}
					dashBoardPage={dashBoardPage}
					avancePage={avancePage}
					estimacionesPage={estimacionesPage}
					dieselPage={dieselPage}
				/>
			) : (
				<NavMobile
					homePage={homePage}
					dashBoardPage={dashBoardPage}
					avancePage={avancePage}
					estimacionesPage={estimacionesPage}
					dieselPage={dieselPage}
				/>
			)}
		</>
	);
};

export default Nav;
