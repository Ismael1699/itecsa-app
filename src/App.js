import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
    return (
        <div>
            <Navbar />
            <Search />
            <Content />
        </div>
    );
}

export default App;
