import React, { useEffect } from 'react';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';

const Navbar = ({ displayWidth }) => {
    return <>{displayWidth > 600 ? <NavbarWeb /> : <NavbarMobile />}</>;
};

export default Navbar;
