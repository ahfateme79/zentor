import React from 'react';
import './main.css';
import Foodimg from './foodimg'
import Two from '../img/2.jpg'
import Three from '../img/3.jpg'
import Four from '../img/4.jpg'
import Five from '../img/5.jpg'
import Six from '../img/6.jpg'

const farr = [
    {
        src: Two,
        food: "Lemon-Rosemary Prawn",
        stuff: 'Seafood / Shrimp / Lemon'
    },
    {
        src: Three,
        food: "Lemon-Rosemary Bakery",
        stuff: 'Bread / Rosemary / Orange'
    },

]
const sarr = [
    {
        src: Four,
        food: "Lemon-Rosemary Salad",
        stuff: 'Chicken / Rosemary / Green'
    },


]
const tarr = [
    {
        src: Five,
        food: "Lemon-Rosemary Vegetables",
        stuff: 'Tomato / Rosemary / Lemon'
    },
    {
        src: Six,
        food: "Lemon-Rosemary Pizza",
        stuff: 'Pasta / Rosemary / Green'
    },

]

const Foodgallery = () => {
    return (
        <div className="foodgallery" id="foodG">
            <div className="heading">
                <h3>Food Gallery</h3>
            </div>
            <div className="fooditem">
                <div>
                    {
                        farr.map((n, index) => {
                            return <Foodimg key={index} src={n.src} food={n.food} stuff={n.stuff} />

                        })

                    }

                </div>
                <div>
                    {
                        sarr.map((n, inedx) => {
                            return <Foodimg src={n.src} food={n.food} stuff={n.stuff} />
                        })
                    }
                </div>
                <div>
                    {
                        tarr.map((n, inedx) => {
                            return <Foodimg src={n.src} food={n.food} stuff={n.stuff} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}


export default Foodgallery