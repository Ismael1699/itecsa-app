import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Nav from './components/Nav';
import './App.css';
import TopBarWeb from './components/TopBarWeb';

function App() {
	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [loadPage, setLoadPage] = useState('Home');

	const getDisplaySize = () => {
		setDisplayWidth(window.innerWidth);
	};

	const homePage = () => {
		setLoadPage('Home');
		console.log(loadPage);
	};

	const dashBoardPage = () => {
		setLoadPage('Dashboard');
		console.log(loadPage);
	};

	const avancePage = () => {
		setLoadPage('Avance');
		console.log(loadPage);
	};

	const estimacionesPage = () => {
		setLoadPage('Estimaciones');
		console.log(loadPage);
	};

	const dieselPage = () => {
		setLoadPage('Diesel');
		console.log(loadPage);
	};

	//Con este useEffect se obtine el ancho de la pantalla en todo el tiempo de ejecución del proyecto
	useEffect(() => {
		window.addEventListener('resize', getDisplaySize);
	});
	return (
		<div id='app'>
			<div id='container-nav'>
				<Nav
					displayWidth={displayWidth}
					homePage={homePage}
					dashBoardPage={dashBoardPage}
					avancePage={avancePage}
					estimacionesPage={estimacionesPage}
					dieselPage={dieselPage}
					loadPage={loadPage}
				/>
			</div>
			<div id='container-section'>
				{displayWidth > 600 ? <TopBarWeb /> : <></>}
				<Content loadPage={loadPage} />
			</div>
		</div>
	);
}

export default App;
