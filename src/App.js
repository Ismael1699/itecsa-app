import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './App.css';

function App() {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

    const getDisplaySize = () => {
        setDisplayHeight(window.innerHeight);
        setDisplayWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', getDisplaySize);
    });
    return (
        <div id='app-container'>
            <div id='item-app-navbar'>
                <Navbar />
            </div>
            <div id='item-app-content'></div>
        </div>
    );
}

export default App;
