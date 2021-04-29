import React from 'react';
import './main.css';
import Foodgallery from './foodgallery'
import Special from './specialf';
import Chefs from './chefs';
import Contact from './contact';
import Contactinfo from './contactinfo';


const Main = () => {
    return (
        <main>
            <Foodgallery />
            <Special />
            <Chefs />
            <Contact />
            <Contactinfo />
        </main>
    )
}


export default Main