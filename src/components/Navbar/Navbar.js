import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaCog, FaBell, FaBars, FaTimes, FaHome, FaUsers, FaFilePdf, FaEdit, FaBookReader } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'
import { Badge } from 'react-bootstrap'

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
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <div className="logo-img-wraper">
                                        <img className="logo-img" src={process.env.PUBLIC_URL + '/pic/my-logo.png'} />
                                    </div>
                                </Link>
                            </li>
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
                            <li className="nav-item"><Link to="/nofications" className="nav-link" onClick={ hideMenu }><FaBell className="icon" /></Link></li>
                            <li className="nav-item"><Link to="/setting" className="nav-link"><FaCog  className="icon" /></Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link"><FaUserCircle className="icon" /></Link></li>
                        </ul>
                    </div>
                    <div className="nav-menu mobile">
                        <ul className="nav">
                            <li className="nav-item"><Link to="/nofications" className="nav-link" onClick={ hideMenu }><FaUserCircle className="icon" /></Link></li>
                            <li className="nav-item"><span className="nav-link" onClick={ toggleMenu }>{ showMenu ? <FaTimes className="icon" /> : <FaBars className="icon" />}</span></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="second-naav mobile"> 
                    <Link to="/" onClick={ hideMenu }><FaHome className="icon"/></Link>
                    <Link to="/studying-materials" onClick={ hideMenu }><FaBookReader className="icon"/></Link>
                    <Link to="/assignments" onClick={ hideMenu }><FaEdit className="icon"/></Link>
                    <Link to="/users" onClick={ hideMenu }><FaUsers className="icon"/></Link>
                    <Link to="/nofications" onClick={ hideMenu }><FaBell className="icon"/><Badge variant="danger" >20</Badge></Link>
                </div>
            </div>
        </nav>
    )
}
