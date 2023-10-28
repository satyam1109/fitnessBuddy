import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import './pages.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg nav_bar bg-dark"  data-bs-theme="dark">
            <div className="container-fluid flex">
                <Link className="navbar-brand" to="/"><img src={logo} className='logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav_items collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/exercises">Exercises</Link>
                        </li>
                        <li className="nav-item dropdown active">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nutrition
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/food">Food</Link></li>
                                <li><Link className="dropdown-item" to="/supplements">Supplements</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pt">Personal Training</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}
