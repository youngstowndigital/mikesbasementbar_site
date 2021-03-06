import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
