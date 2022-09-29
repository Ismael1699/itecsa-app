import React, { useEffect } from 'react';
import NavbarMobile from './NavbarMobile';
import NavWeb from './NavWeb';

const Navbar = ({ displayWidth }) => {
    return <>{displayWidth > 600 ? <NavWeb /> : <NavbarMobile />}</>;
};

export default Navbar;
