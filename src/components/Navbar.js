import '../styles/Navbar.css';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav id='navbar'>
                <ul id='nav-container'>
                    <div className='item-container'>
                        <i className='bi bi-house-fill'></i>
                        <li>Home</li>
                    </div>
                    <div className='item-container'>
                        <i className='bi bi-grid-1x2-fill'></i>
                        <li>DashBoard</li>
                    </div>
                    <div className='item-container'>
                        <i className='bi bi-symmetry-vertical'></i>
                        <li>Avance Diario</li>
                    </div>
                    <div className='item-container'>
                        <i className='bi bi-book-fill'></i>
                        <li>Estimaciones</li>
                    </div>
                    <div className='item-container'>
                        <i className='bi bi-fuel-pump-fill'></i>
                        <li>Cargas diésel</li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
