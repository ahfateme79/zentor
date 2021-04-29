import React from 'react';
import './navigation.css'

const Items = (props) => {
    return(
        <li><a href={props.href} >{props.item}</a></li>
    )
}

export default Items