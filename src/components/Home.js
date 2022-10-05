import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContainerHome = styled.div`
	height: 100%;
	border-radius: 30px;
`;

const Home = () => {
	return (
		<ContainerHome>
			<h1>
				¡Bienvendio al software de control y administración de
				Triturados basalticos de Tepetlaoxtoc!
			</h1>
		</ContainerHome>
	);
};

export default Home;
