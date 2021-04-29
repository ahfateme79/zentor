import React from 'react';
import './main.css';



const Foodimg = (props) => {
    return (
        <figure>
            <img src={props.src} />
            <figcaption>
                <span>{props.food}</span>
                <p>{props.stuff}</p>
            </figcaption>
        </figure>
    )
}

export default Foodimg