import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './App.css';

function App() {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

    const getDisplaySize = () => {
        setDisplayWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', getDisplaySize);
    });
    return (
        <div id='app-container'>
            <div id='item-app-navbar'>
                <Navbar displayWidth={displayWidth} />
            </div>
            <div id='item-app-content'>
                <Search />
            </div>
        </div>
    );
}

export default App;
