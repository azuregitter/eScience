import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Home.jsx'
import Documents from './Documents.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function Navvy() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/">
                            <li className="nav-item bg-lightblue px-4 hover">
                                <a className="nav-link clickable">Home</a>
                            </li>
                        </Link>
                        <Link to="/documents">
                            <li className="nav-item bg-lightblue px-4 hover">
                                <a className="nav-link clickable">Documents</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

function App() {
  return (
    <>
        <Router>
            <Navvy />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/documents" element={<Documents />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
