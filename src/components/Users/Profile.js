import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'


export default function Profile() {
    const [user, setUser] = useState({
        status:false,
        error:false,
        data:null
    })
    let {id} = useParams()
    let URL = `/profile/${id}`
    useEffect(()=>{
        fetch(URL).then(res => res.json()).then(data => setUser({
            status:true,
            error:false,
            data:data
        }))
    }, [URL])

    let container;
    if(user.data){
        container = user.data.map(profile => (
            <Row className="profile-wraper" key={profile.student_id}>
                <Col md={8}>
                    <img src={process.env.PUBLIC_URL + '/pic/FB_IMG_15623326197874033.jpg'} />
                </Col>
                <Col md={8}>
                    <h4>Details</h4>
                    <h6>Name: {profile.name }</h6>
                    <h6>College of : CSIT</h6>
                    <h6>Department: Information & technology</h6>
                    <h6>Semister: {profile.semister }</h6>
                    <h6>E-mail: konakech32gmail.com</h6>
                    <h6>Address: Juba</h6>
                    <p></p>
                    
                </Col>
                <Col md={6}>
                    <h4>About me</h4>
                    <p>{profile.about }</p>
                </Col>
            </Row>
        ))
    }
    return (
        <div>
            <div>
                <h3>Kon's Profile</h3>
            </div>
            { container }
        </div>
    )
}

