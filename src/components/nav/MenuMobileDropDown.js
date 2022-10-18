import React, { useEffect, useState } from "react";
import "../../styles/MenuMobileDropDown.css";
import styled, { keyframes } from "styled-components";

const ContainerAllDisplay = styled.div`
    .container-all {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: -100vw;
        display: flex;
        transition: left 0.8s;
        z-index: 1;
    }
    .actived {
        left: 0;
    }
`;

const MenuMobileDropDown = ({
    homePage,
    dashBoardPage,
    avancePage,
    estimacionesPage,
    dieselPage,
    toggleMenuButton,
    menuButtonState,
}) => {
    return (
        <ContainerAllDisplay>
            <div
                className={`container-all ${menuButtonState ? "actived" : ""}`}>
                <div id='container-DropDown'>
                    <div className='section-top'>
                        <i className='item-top bi bi-person-circle'></i>
                        <i
                            onClick={toggleMenuButton}
                            className='item-top bi bi-x-lg'></i>
                    </div>
                    <div className='section-bottom'>
                        <button
                            className='item-mobile'
                            type='button'
                            onClick={() => {
                                homePage();
                                toggleMenuButton();
                            }}>
                            <i className='bi bi-house-fill'></i>
                            <h1>Home</h1>
                        </button>
                        <button
                            className='item-mobile'
                            type='button'
                            onClick={() => {
                                dashBoardPage();
                                toggleMenuButton();
                            }}>
                            <i className='bi bi-grid-1x2-fill'></i>
                            <h1>DashBoard</h1>
                        </button>
                        <button
                            className='item-mobile'
                            type='button'
                            onClick={() => {
                                avancePage();
                                toggleMenuButton();
                            }}>
                            <i className='bi bi-symmetry-vertical'></i>
                            <h1>Avance Diario</h1>
                        </button>
                        <button
                            className='item-mobile'
                            type='button'
                            onClick={() => {
                                estimacionesPage();
                                toggleMenuButton();
                            }}>
                            <i className='bi bi-book-fill'></i>
                            <h1>Estimaciones</h1>
                        </button>
                        <button
                            className='item-mobile'
                            type='button'
                            onClick={() => {
                                dieselPage();
                                toggleMenuButton();
                            }}>
                            <i className='bi bi-fuel-pump-fill'></i>
                            <h1>Cargas diésel</h1>
                        </button>
                    </div>
                </div>

                <div id='container-rest' onClick={toggleMenuButton}></div>
            </div>
        </ContainerAllDisplay>
    );
};

export default MenuMobileDropDown;
