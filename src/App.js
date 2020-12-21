import { BrowserRouter as Router,  Link, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDownload } from 'react-icons/fa'

import { Container, Button } from 'react-bootstrap'
import Main from './components/Main/Main'
import Assignments from './components/Assignments/Assignments'
import StudyingMaterials from './components/StudyingMaterials/StudyingMaterials'
import Users from './components/Users/Users'

import './App.css';

function App() {
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
              </Switch>
          </div>
          <div className="sidebar-content">
          <div className="assignment-content my-4">
                <h5>PHYSIC MECHANIC ASSIGNMENT</h5>
                <span>Deadline: 22/12/2020</span>
                <p>desktop, tabletes, mobile screens Mobile responsive Every website I build is responsive to variouse screens sizes including desktop, tabletes, mobile screens</p>
                <Button variant="success"><FaDownload /> Download</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>

  );
}

export default App;
