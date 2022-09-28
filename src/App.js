import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './App.css';

function App() {
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
