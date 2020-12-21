import React from 'react'
import { Link } from 'react-router-dom'


export default function Navlinks({ hideMenu }) {
    return (
        <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={ hideMenu }>Home</Link></li>
            <li className="nav-item"><Link to="/assignments" className="nav-link" onClick={ hideMenu }>Assignments</Link></li>
            <li className="nav-item"><Link to="/studying-materials" className="nav-link" onClick={ hideMenu }>Studying Materials</Link></li>
            <li className="nav-item"><Link to="/users" className="nav-link" onClick={ hideMenu }>Users</Link></li>
            <li className="nav-item"><Link to="/users" className="nav-link" onClick={ hideMenu }>Pass papers</Link></li>
            <li className="nav-item"><Link to="/users" className="nav-link" onClick={ hideMenu }>Quize</Link></li>
        </ul>
    )
}
