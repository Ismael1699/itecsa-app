import React from 'react';
import '../styles/MenuMobileDropDown.css';
import styled, { keyframes } from 'styled-components';

const ContainerDropDown = styled.div`
	position: relative;
	top: 0px;
	left: 0vw;
	width: 50%;
	height: 100%;
	background-color: rgba(218, 218, 218, 0.315);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const MenuMobileDropDown = ({
	homePage,
	dashBoardPage,
	avancePage,
	estimacionesPage,
	dieselPage,
	toggleMenuButton,
}) => {
	return (
		<div id='container-allDisplay'>
			<ContainerDropDown>
				<button
					className='item-mobile'
					type='button'
					onClick={() => {
						homePage();
						toggleMenuButton();
					}}
				>
					<i className='bi bi-house-fill'></i>
					<h1>Home</h1>
				</button>
				<button
					className='item-mobile'
					type='button'
					onClick={() => {
						dashBoardPage();
						toggleMenuButton();
					}}
				>
					<i className='bi bi-grid-1x2-fill'></i>
					<h1>DashBoard</h1>
				</button>
				<button
					className='item-mobile'
					type='button'
					onClick={() => {
						avancePage();
						toggleMenuButton();
					}}
				>
					<i className='bi bi-symmetry-vertical'></i>
					<h1>Avance Diario</h1>
				</button>
				<button
					className='item-mobile'
					type='button'
					onClick={() => {
						estimacionesPage();
						toggleMenuButton();
					}}
				>
					<i className='bi bi-book-fill'></i>
					<h1>Estimaciones</h1>
				</button>
				<button
					className='item-mobile'
					type='button'
					onClick={() => {
						dieselPage();
						toggleMenuButton();
					}}
				>
					<i className='bi bi-fuel-pump-fill'></i>
					<h1>Cargas diésel</h1>
				</button>
			</ContainerDropDown>
			<div id='container-rest' onClick={toggleMenuButton}></div>
		</div>
	);
};

export default MenuMobileDropDown;
