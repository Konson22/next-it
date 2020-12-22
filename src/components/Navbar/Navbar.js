import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaCog, FaBell, FaBars, FaTimes } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'

import Navlinks from './Navlinks'
import './Navbar.css';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(showMenu, null, {
        from:{opacity:0, transform:'translateX(-100%'},
        enter:{opacity:1, transform:'translateX(0)'},
        leave:{opacity:0, transform:'translateX(-100%'}
    })

    function toggleMenu(){
        setShowMenu(!showMenu)
    }
    function hideMenu(){
        setShowMenu(false)
    }
    return (
        <nav>
            <div className="container">
                <div className="nav-wraper">
                    <div className="nav-logo">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/" className="nav-link"><h2>Next IT</h2></Link></li>
                        </ul>
                    </div>
                    <div className="nav-link-wraper desctop">
                        <Navlinks hideMenu={ hideMenu } />
                    </div>
                    {
                        transitions.map(({item, key, props})=>(
                            item && <animated.div key={key} style={props} className="nav-link-wraper">
                                <Navlinks hideMenu={ hideMenu } />
                        </animated.div>
                        ))
                    }
                    <div className="nav-menu desctop">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/" className="nav-link"><FaBell /></Link></li>
                            <li className="nav-item"><span className="nav-link"><FaCog  /></span></li>
                            <li className="nav-item"><Link to="/" className="nav-link"><FaUserCircle/></Link></li>
                        </ul>
                    </div>
                    <div className="nav-menu mobile">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/" className="nav-link"><FaBell className="icon" /></Link></li>
                            <li className="nav-item"><span className="nav-link" onClick={ toggleMenu }>{ showMenu ? <FaTimes className="icon" /> : <FaBars className="icon" />}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
