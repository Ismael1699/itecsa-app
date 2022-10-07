import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../styles/Home.css';
import tbt from '../img/tbt.png';

const ContainerHome = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 30px;
	display: flex;
	background-image: url(${(props) => props.tbt});
`;

const Home = () => {
	return (
		<ContainerHome tbt={tbt}>
			<div className='container-home'>
				<h1>¡Welcome!</h1>
			</div>
		</ContainerHome>
	);
};

export default Home;
