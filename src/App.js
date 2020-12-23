import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router,  Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDownload } from 'react-icons/fa'

import { Container, Button } from 'react-bootstrap'
import Main from './components/Main/Main'
import Assignments from './components/Assignments/Assignments'
import StudyingMaterials from './components/StudyingMaterials/StudyingMaterials'
import Users from './components/Users/Users'
import Profile from './components/Users/Profile'
import Nofications from './components/Nofications/Nofications'
import Setting from './components/Setting/Setting'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
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

  let filesContainer;
    if(assingments.status){
        filesContainer = assingments.data.map((assignment => 
            <div className="assignment-content my-4">
                    <h5><b>{ assignment.file_title }</b></h5>
                    <span>Deadline: { assignment.upload_date }</span>
                    <p>{  assignment.dicription }</p>
                    <Button variant="success btn-sm"><FaDownload /> Download</Button>
            </div>
        ))
    }else if(!assingments.status){
        filesContainer = "Loading"
    }else if(assingments.error){
        filesContainer = "something went wrong!"
    }
  return (
    <Router>
    <div className="app-wraper">
        <Navbar />
      <div className="main-container">
        <div className="container">
          <div className="main-content">
              <Switch>
                <Route exact path="/"><Main /></Route>
                <Route exact path="/assignments"><Assignments /></Route>
                <Route exact path="/studying-materials"><StudyingMaterials /></Route>
                <Route exact path="/users"><Users /></Route>
                <Route exact path="/profile/:id"><Profile /></Route>
                <Route exact path="/setting"><Setting /></Route>
                <Route exact path="/nofications"><Nofications /></Route>
              </Switch>
          </div>
          <div className="sidebar-content">
            <div className="title-wraper">
              <h2><b>Assignments</b></h2>
            </div>
            <div className="">
              { filesContainer }
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </Router>

  );
}

export default App;
