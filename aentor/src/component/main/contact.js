import React from 'react';
import Inputs from './inputs';
import inputs from './inputs';
import './main.css'


const inp = [
    {
        type: "text",
        placeholder: "Name"
    },
    {
        type: "email",
        placeholder: "Email"
    },

]

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contactead">
                <h6>Contact Us</h6>
            </div>
            <div className="contact-body">
                <div>
                    {
                        inp.map((n, index) => {
                            return <Inputs key={index} type={n.type} placeholder={n.placeholder} />
                        })
                    }

                </div>
                <textarea placeholder="Message"></textarea>
                <button>makea reservation</button>
            </div>
        </div>
    )
}

export default Contact
