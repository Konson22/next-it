import React from 'react'
import {Button, Card } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import './StudyingMaterials.css'

export default function StudyingMaterials() {
    return (
        <div>
            <div className="title-wraper">
                <h2><b>Studying Materials</b></h2>
            </div>
            <div className="">
                <div className="my-4">
                    <h5>Physic Heat</h5>
                    <p>MyApp is a open sourch web application for university of Juba collage of computer science, information and technology to help students share notes, Ideas, and academicaly related </p>
                    <Button variant="success btn-sm"><FaDownload /> Download </Button>
                </div>
                <div className="my-4">
                    <h5>Physic Heat</h5>
                    <p>MyApp is a open sourch web application for university of Juba collage of computer science,</p>
                    <Button variant="success btn-sm"><FaDownload /> Download </Button>
                </div>
                <div className="my-4">
                    <h5>Physic Heat</h5>
                    <p>MyApp is a open sourch web application for university of Juba collage of computer science, information and technology to help students share notes, Ideas, and academicaly related </p>
                    <Button variant="success btn-sm"><FaDownload /> Download </Button>
                </div>
                <div className="my-4">
                    <h5>Physic Heat</h5>
                    <p>MyApp is a open sourch web application for university of Juba collage of computer science,</p>
                    <Button variant="success btn-sm"><FaDownload /> Download </Button>
                </div>
            </div>
        </div>
    )
}
