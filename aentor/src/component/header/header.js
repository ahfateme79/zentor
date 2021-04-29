import React from 'react';
import './header.css';
import Navigation from '../navigation/navigation';


const Header = () => {
    return (
        <header>
            <Navigation />
            <div className="home" id="home">
                <span>ZENTRO RESTAURANT</span>
                <h2>CLEAN & SIMPLE DESIGN</h2>
                <button>LEARN MORE</button>
            </div>

        </header>
    )
};

export default Header;