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
			<div className='item-web' onClick={homePage}>
				<div
					className={
						loadPage === 'Home'
							? 'press-on'
							: 'icon-and-text-container'
					}
				>
					<i className='bi bi-house-fill'></i>
					<h1>Home</h1>
				</div>
				<div className={loadPage === 'Home' ? 'cur-top' : ''}></div>
				<div className={loadPage === 'Home' ? 'cur-bot' : ''}></div>
			</div>
			<div className='item-web' onClick={dashBoardPage}>
				<div
					className={`icon-and-text-container ${
						loadPage === 'Dashboard' ? 'press-on' : ''
					}`}
				>
					<i className='bi bi-grid-1x2-fill'></i>
					<h1>DashBoard</h1>
				</div>
				<div
					className={loadPage === 'Dashboard' ? 'cur-top' : ''}
				></div>
				<div
					className={loadPage === 'Dashboard' ? 'cur-bot' : ''}
				></div>
			</div>
			<div className='item-web' onClick={avancePage}>
				<div
					className={`icon-and-text-container ${
						loadPage === 'Avance' ? 'press-on' : ''
					}`}
				>
					<i className='bi bi-symmetry-vertical'></i>
					<h1>Avance Diario</h1>
				</div>
				<div className={loadPage === 'Avance' ? 'cur-top' : ''}></div>
				<div className={loadPage === 'Avance' ? 'cur-bot' : ''}></div>
			</div>
			<div className='item-web' onClick={estimacionesPage}>
				<div
					className={`icon-and-text-container ${
						loadPage === 'Estimaciones' ? 'press-on' : ''
					}`}
				>
					<i className='bi bi-book-fill'></i>
					<h1>Estimaciones</h1>
				</div>
				<div
					className={loadPage === 'Estimaciones' ? 'cur-top' : ''}
				></div>
				<div
					className={loadPage === 'Estimaciones' ? 'cur-bot' : ''}
				></div>
			</div>
			<div className='item-web' onClick={dieselPage}>
				<div
					className={`icon-and-text-container ${
						loadPage === 'Diesel' ? 'press-on' : ''
					}`}
				>
					<i className='bi bi-fuel-pump-fill'></i>
					<h1>Cargas diésel</h1>
				</div>
				<div className={loadPage === 'Diesel' ? 'cur-top' : ''}></div>
				<div className={loadPage === 'Diesel' ? 'cur-bot' : ''}></div>
			</div>
		</div>
	);
};

export default NavWeb;
