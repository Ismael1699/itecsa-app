import React, { useEffect } from 'react';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';

const Navbar = ({ displayHeight, displayWidth }) => {
    return <>{displayWidth > 600 ? <NavbarWeb /> : <NavbarMobile />}</>;
};

export default Navbar;
