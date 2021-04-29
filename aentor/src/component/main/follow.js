import React from 'react';
import './main.css'
import Faceb from '../img/facebook-app-symbol.png'
import Twitter from '../img/twitter.png'
import Dribble from '../img/dribbble.png'
import Github from '../img/github.png'

const Follow = () => {
    return (
        <div className="follow">
            <h6>Follow Us</h6>
            <div>
                <figure>
                    <img src={Faceb} />
                </figure>
                <figure>
                    <img src={Twitter} />
                </figure>
                <figure>
                    <img src={Dribble} />
                </figure>
                <figure>
                    <img src={Github} />
                </figure>

            </div>
        </div>
    )
}

export default Follow