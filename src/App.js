import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Nav from './components/Nav';
import './App.css';
import TopBarWeb from './components/TopBarWeb';

function App() {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

    const getDisplaySize = () => {
        setDisplayWidth(window.innerWidth);
    };

    //Con este useEffect se obtine el ancho de la pantalla en todo el tiempo de ejecución del proyecto
    useEffect(() => {
        window.addEventListener('resize', getDisplaySize);
    });
    return (
        <div id='app'>
            <div id='container-nav'>
                <Nav displayWidth={displayWidth} />
            </div>
            <div id='container-section'>
                {displayWidth > 600 ? <TopBarWeb /> : <></>}
                <Content />
            </div>
        </div>
    );
}

export default App;
