import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="nav-bar">
                    <NavLink to='/home' className="nav-button button" id="home-button">Home</NavLink>
                    <NavLink to='/about-me' className="nav-button button" id="aboutme-button">About Me</NavLink>
                    <NavLink to='/projects' className="nav-button button" id="projects-button">Projects</NavLink>
                    <NavLink to='/skills' className="nav-button button" id="skills-button">Skills</NavLink>
        </nav>
    )
}