import React from 'react';
import './navigation.css'
import Items from './menu'
const menuItem = [
    {
        href: "#home",
        item: "HOME"
    },
    {
        href: "#foodG",
        item: "FOOD GALLERY"
    },

    {
        href: "#special",
        item: "SPECIAL MENU"
    },

    {
        href: "#chefs",
        item: "CHEFS"
    },

    {
        href: "#contact",
        item: "CONTACT"
    },

]

class Navigation extends React.Component {

    render() {
        return (
            <nav>
                <div className="webname">
                    <h1>ZENTRO</h1>
                </div>
                <div className="menu">
                    <ul>
                        {
                            menuItem.map((n, index) => {
                                return <Items href={n.href} item={n.item} />
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navigation