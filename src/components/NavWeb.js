import React from 'react';
import '../styles/NavWeb.css';
import user from '../img/user.jpeg';

const NavWeb = ({
	homePage,
	dashBoardPage,
	avancePage,
	estimacionesPage,
	dieselPage,
	loadPage,
}) => {
	return (
		<div id='navWeb'>
			<div className='photo-user'>
				<div className='container-photo'>
					<img src={user}></img>
				</div>
				<h1>Ismael Sarmiento</h1>
			</div>
			<button
				className={
					loadPage === 'Home' ? 'item-focus adorno-focus' : 'item-web'
				}
				type='button'
				onClick={homePage}
			>
				<i className='bi bi-house-fill'></i>
				<h1>Home</h1>
			</button>
			<button
				className={loadPage === 'Dashboard' ? 'item-focus' : 'item-web'}
				onClick={dashBoardPage}
				type='button'
			>
				<i className='bi bi-grid-1x2-fill'></i>
				<h1>DashBoard</h1>
			</button>
			<button
				className={loadPage === 'Avance' ? 'item-focus' : 'item-web'}
				onClick={avancePage}
			>
				<i className='bi bi-symmetry-vertical'></i>
				<h1>Avance Diario</h1>
			</button>
			<button
				className={
					loadPage === 'Estimaciones' ? 'item-focus' : 'item-web'
				}
				onClick={estimacionesPage}
			>
				<i className='bi bi-book-fill'></i>
				<h1>Estimaciones</h1>
			</button>
			<button
				className={loadPage === 'Diesel' ? 'item-focus' : 'item-web'}
				onClick={dieselPage}
			>
				<i className='bi bi-fuel-pump-fill'></i>
				<h1>Cargas diésel</h1>
			</button>
		</div>
	);
};

export default NavWeb;
