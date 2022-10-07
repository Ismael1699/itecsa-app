import React from 'react';
import styled from 'styled-components';

const ContainerDash = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 18px 18px;
	grid-template-areas:
		'home nominas estimaciones estimaciones'
		'home nominas estimaciones estimaciones'
		'compras otros estimaciones estimaciones'
		'compras otros estimaciones estimaciones'
		'avances avances estimaciones estimaciones'
		'avances avances estimaciones estimaciones'
		'avances avances maquinaria almacen'
		'diesel diesel maquinaria almacen'
		'diesel diesel maquinaria almacen';

	#dash-home {
		grid-area: home;
	}

	#dash-avance {
		grid-area: avances;
	}

	#dash-estimaciones {
		grid-area: estimaciones;
	}

	#dash-diesel {
		grid-area: diesel;
	}

	#dash-maquinaria {
		grid-area: maquinaria;
	}

	#dash-compras {
		grid-area: compras;
	}

	#dash-nominas {
		grid-area: nominas;
	}

	#dash-almacen {
		grid-area: almacen;
	}

	#dash-otros {
		grid-area: otros;
	}

	.dash-item {
		background-color: #e2eb94;
		border-radius: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #675900;
	}
`;

const DashBoard = () => {
	return (
		<ContainerDash>
			<div id='dash-home' className='dash-item'>
				<h2>home</h2>
			</div>
			<div id='dash-avance' className='dash-item'>
				<h2>Avance</h2>
			</div>
			<div id='dash-estimaciones' className='dash-item'>
				<h2>Estimaciones</h2>
			</div>
			<div id='dash-diesel' className='dash-item'>
				<h2>Diésel</h2>
			</div>
			<div id='dash-maquinaria' className='dash-item'>
				<h2>Maquinaria</h2>
			</div>
			<div id='dash-compras' className='dash-item'>
				<h2>Compras</h2>
			</div>
			<div id='dash-nominas' className='dash-item'>
				<h2>Nominas</h2>
			</div>
			<div id='dash-almacen' className='dash-item'>
				<h2>Almacen</h2>
			</div>
			<div id='dash-otros' className='dash-item'>
				<h2>Otros</h2>
			</div>
		</ContainerDash>
	);
};

export default DashBoard;
