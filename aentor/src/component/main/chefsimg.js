import React from 'react';
import './main.css'
const Chefsimg=(props)=>{
    return(
        <figure>
            <img src={props.img} />
            <figcaption>
                <span>{props.name}</span>
                <h5>{props.title}</h5>
            </figcaption>
        </figure>
    )
}
export default Chefsimg