import React from 'react'
import './Logo.css'
export default function Logo() {
    return (
        <div className="logo-box">
            <img src={process.env.PUBLIC_URL + './pic/logo1.jpg'} />            
        </div>
    )
}
