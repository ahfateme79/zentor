import React from 'react';
import './main.css'

const Inputs=(props)=>{
    return(
        <input type={props.type} placeholder={props.placeholder}/>
    )
}

export default Inputs