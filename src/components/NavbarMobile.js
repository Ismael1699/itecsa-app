import React from 'react';
import MenuMobile from './MenuMobile';
import '../styles/NavbarMobile.css';

const NavbarMobile = () => {
    return (
        <div id='Navmobile-container'>
            <MenuMobile />
            <p>Home</p>
            <i id='user-icon' className='bi bi-person-circle'></i>
        </div>
    );
};

export default NavbarMobile;
