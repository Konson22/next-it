import React from 'react'
import './Loader.css'


export default function Loader() {
    return (
        <div className="loader-wraper">
            <div className="loader">
               <img src={process.env.PUBLIC_URL + '/pic/image2.png'} />
            </div>
        </div>
    )
}
