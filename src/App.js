import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Nav from './components/Nav';
import './App.css';
import TopBarWeb from './components/TopBarWeb';

function App() {
	const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
	const [loadPage, setLoadPage] = useState('home');
	const [areaNamesData, setAreaNamesData] = useState([
		'home',
		'hola',
		'hora',
		'hay',
		'dashboard',
		'day',
		'daily',
		'derevil',
		'dos',
		'avance',
		'abra',
		'avanlo',
		'avion',
		'avioacion',
		'estimaciones',
		'eso',
		'esos',
		'esontato',
		'diesel',
		'dia',
		'dialorgar',
		'diatono',
	]);

	const getDisplaySize = () => {
		setDisplayWidth(window.innerWidth);
	};

	const homePage = () => {
		setLoadPage('home');
	};

	const dashBoardPage = () => {
		setLoadPage('dashboard');
	};

	const avancePage = () => {
		setLoadPage('avance');
	};

	const estimacionesPage = () => {
		setLoadPage('estimaciones');
	};

	const dieselPage = () => {
		setLoadPage('diesel');
	};

	const handleSearch = (e) => {
		e.preventDefault();
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
				{displayWidth > 600 ? (
					<TopBarWeb
						areaNamesData={areaNamesData}
						handleSearch={handleSearch}
					/>
				) : (
					<></>
				)}
				<Content loadPage={loadPage} />
			</div>
		</div>
	);
}

export default App;
