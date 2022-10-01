import React from 'react';
import '../styles/Content.css';
import Home from './Home.js';
import DashBoard from './DashBoard.js';
import Avance from './Avance.js';
import Estimaciones from './Estimaciones.js';
import Diesel from './Diesel.js';

const Content = ({ loadPage }) => {
	return (
		<div id='content-container'>
			{
				{
					Home: <Home />,
					Dashboard: <DashBoard />,
					Avance: <Avance />,
					Estimaciones: <Estimaciones />,
					Diesel: <Diesel />,
				}[loadPage]
			}
		</div>
	);
};

export default Content;
