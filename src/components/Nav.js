import React, { useEffect } from 'react';
import NavMobile from './NavMobile';
import NavWeb from './NavWeb';

const Nav = ({ displayWidth }) => {
    return <>{displayWidth > 600 ? <NavWeb /> : <NavMobile />}</>;
};

export default Nav;
