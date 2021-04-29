import React from 'react';
import './main.css'
import Seven from '../img/7.jpg'
import Eight from '../img/8.jpg'
import Nine from '../img/9.jpg'
import Chefsimg from './chefsimg';

const chefinfo=[
    {
        img:Seven,
        name:"Thanya",
        title:"Main Chef"
    },
        {
        img:Eight,
        name:"Lynda",
        title:"Pizza Specialist"
    },
        {
        img:Nine,
        name:"Jenny Ko",
        title:"New Baker"
    }
]


const Chefs = () => {
    return (
        <div className="chefs" id="chefs">
            <div className="chefhead">
                <h5>Meet Zentro chefs</h5>
            </div>
            <div className="photos">
                {
                    chefinfo.map((n,index)=>{
                        return <Chefsimg key={index} img={n.img} name={n.name} title={n.title}/>
                    })
                }
            </div>
        </div>
    )
}
export default Chefs