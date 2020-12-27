import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import { Data } from '../Data'
import Loader from '../Loader/Loader'
import './Users.css'

export default function Users() {
    const [users, setUsers] = useState({
        status:false,
        error:false,
        data:null
    })
    let myHeaders = new Headers({
        'Content-Type': 'text/plain',
        'X-Custom-Header': 'hello world'
    });
    
    let URL = '/users'
    useEffect(()=>{
        setUsers({
            status:false,
            error:false,
            data:null
        })
        fetch(URL, {
            mode: 'no-cors',
            headers: myHeaders
        }).then(res => res.json()).then(data => setUsers({
            status:true,
            error:false,
            data:data
        }))
    }, [])

    let container;
    if(users.status){
        container = users.data.map((user => 
            <Link className="user-wraper" to={`/profile/${user.student_id}`}>
                <div className="user-img-wraper">
                    <img src={process.env.PUBLIC_URL + '/pic/FB_IMG_15623326197874033.jpg'} />
                </div>
                <div className="user-info">
                    <h5>{ user.name }</h5>
                    <h6>I.T</h6>
                </div>
            </Link>
        ))
    }else if(!users.status){
        container = <Loader />
    }
    return (
        <div>
            <div className="title-wraper">
                <h2>Friends list</h2>
                <div className="">
                    { container }
                </div>
            </div>
        </div>
    )
}
