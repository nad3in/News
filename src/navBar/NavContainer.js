import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './navStyles.css'
class NavContanier extends Component {
  render() {
    return (
        <div className="App">
        <nav className="navbar navbar-dark bg-dark">
        <div className="nav-item">
          <Link to="/home" className="nav-link home">Home </Link>
        </div>
        <div className="nav-item">
        <Link to="/addartical" className="nav-link">Form</Link>
        </div>
        <div className="nav-item">
        <Link to="/customarticles" className="nav-link customLists">Custom Lists</Link>
        </div>
        <div className="nav-item">
        <Link to="/" className="nav-link">Logout</Link>
        </div>
  </nav>
        </div>
    );
  }
}

export default NavContanier;
