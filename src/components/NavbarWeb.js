import React from 'react';
import '../styles/NavbarWeb.css';

const NavbarWeb = () => {
    return (
        <div id='nav-container'>
            <div className='item-container'>
                <i className='bi bi-house-fill'></i>
                <h1>Home</h1>
            </div>
            <div className='item-container'>
                <i className='bi bi-grid-1x2-fill'></i>
                <h1>DashBoard</h1>
            </div>
            <div className='item-container'>
                <i className='bi bi-symmetry-vertical'></i>
                <h1>Avance Diario</h1>
            </div>
            <div className='item-container'>
                <i className='bi bi-book-fill'></i>
                <h1>Estimaciones</h1>
            </div>
            <div className='item-container'>
                <i className='bi bi-fuel-pump-fill'></i>
                <h1>Cargas diésel</h1>
            </div>
        </div>
    );
};

export default NavbarWeb;
