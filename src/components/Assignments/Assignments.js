import React from 'react'
import { Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import './Assignments.css'

export default function Assignments() {
    return (
        <div>
            <div className="title-wraper">
                <h2>Assignments</h2>
            </div>
            <div>
                <div className="assignment-content my-4">
                    <h5>Physics mechanic assignment No 1</h5>
                    <span>Deadline: 22/12/2020</span>
                    <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
                </div>
                <div className="assignment-content my-4">
                    <h5>Basic math assignment</h5>
                    <span>Deadline: 22/12/2020</span>
                    <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
                </div>
                <div className="assignment-content my-4">
                    <h5>PHYSIC MECHANIC ASSIGNMENT</h5>
                    <span>Deadline: 22/12/2020</span>
                    <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
                </div>
                <div className="assignment-content my-4">
                    <h5>PHYSIC MECHANIC ASSIGNMENT</h5>
                    <span>Deadline: 22/12/2020</span>
                    <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
                </div>
                <div className="assignment-content my-4">
                    <h5>PHYSIC MECHANIC ASSIGNMENT</h5>
                    <span>Deadline: 22/12/2020</span>
                    <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
                </div>
            </div>
        </div>
    )
}
