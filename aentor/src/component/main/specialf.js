import React from 'react';
import './main.css'
import Price from './price';

const left = [
    {
        foodname: "Lemon-Rosemary Vegetable ...............",
        price: "$20.50",
        stuf: 'Chicken / Rosemary / Lemon'
    },
    {
        foodname: "Lemon-Rosemary Pork ........................",
        price: "$40.75",
        stuf: 'Pork / Tooplate / Lemon'
    },
    {
        foodname: "Lemon-Rosemary Squid ......................",
        price: "$65.00",
        stuf: 'Squid / Rosemary / Lemon'
    },
    {
        foodname: "Lemon-Rosemary Prawn ..................",
        price: "$110.75",
        stuf: 'Chicken / Rosemary / Lemon'
    }

]
const right = [
    {
        foodname: "Lemon-Rosemary Meat ...........................",
        price: "$30.50",
        stuf: 'Meat / Rosemary / Lemon'
    },
    {
        foodname: "Orange-Rosemary Salad ..........................",
        price: "$55.00",
        stuf: 'Salad / Rosemary / Orange'
    },
    {
        foodname: "Orange-Rosemary Shrimp ........................",
        price: "$70.50",
        stuf: 'Shrimp / Rosemary / Orange'
    },
    {
        foodname: "Lemon-Rosemary Seafood .....................",
        price: "$220.50",
        stuf: 'Seafood / Rosemary / Lemon'
    }

]

const Special = () => {
    return (
        <div className="special" id="special">
            <div className="menuhead">
                <h4>Special Menu</h4>
            </div>
            <div className="foodmenu">
                <div className="box">
                    {
                        left.map((n, index) => {
                           return <Price key={index} foodname={n.foodname} price={n.price} stuf={n.stuf} />

                        })
                    }
                </div>
                <div className="box">
                    {
                        right.map((n, index) => {
                            return <Price key={index} foodname={n.foodname} price={n.price} stuf={n.stuf} />

                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Special