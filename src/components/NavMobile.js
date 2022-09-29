import React from 'react';
import MenuMobile from './MenuMobile';
import '../styles/NavMobile.css';

const NavMobile = () => {
    return (
        <div id='Navmobile'>
            <MenuMobile />
            <p>Home</p>
            <i id='user-icon' className='bi bi-person-circle'></i>
        </div>
    );
};

export default NavMobile;
