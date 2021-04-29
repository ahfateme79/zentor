import React from 'react';
import './main.css'


const Price = (props) => {
    return (
        <div className="price">
            <h4>{props.foodname}</h4>
            <span>{props.price}</span>
            <p>{props.stuf}</p>
        </div>
    )
}

export default Price