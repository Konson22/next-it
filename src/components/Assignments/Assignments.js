import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import Loader from "../Loader/Loader"

import './Assignments.css'

export default function Assignments() {
    const [assingments, setAssignments ] = useState({
        status:false,
        error:false,
        data:null
    })

    useEffect(()=>{
        setAssignments({
            status:false,
            error:false,
            data:null
        })
        fetch('/assignments').then(res => res.json()).then(data => setAssignments({
            status:true,
            error:false,
            data:data
        })).catch( error => setAssignments({
            error:true,
            data:null
        }))
    }, [])

    let container;
    if(assingments.status){
        container = assingments.data.map((assignment => 
            <div className="assignment-content my-4">
                    <h5><b>{ assignment.file_title }</b></h5>
                    <span>Deadline: { assignment.upload_date }</span>
                    <p>{  assignment.dicription }</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
            </div>
        ))
    }else if(!assingments.status){
        container = <Loader />
    }else if(assingments.error){
        container = "something went wrong!"

    }
    return (
        <div>
            <div className="title-wraper">
                <h2>Assignments</h2>
            </div>
            <div>
                { container }
            </div>
        </div>
    )
}
