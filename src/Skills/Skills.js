import './Skills.css';
import { DiCss3, DiJavascript, DiReact, DiPython, DiHtml5 } from 'react-icons/di';

export default function Skills() {
    return(
        <div className="skills content">
        <div><h1>Skills</h1></div>
        <div className="skills-container">
            <div className='skill-container'>
                <div className="skill"><DiHtml5 /></div>
                <div className="skill-description">HTML</div>
                </div>
            <div className='skill-container'>
                <div className="skill"><DiCss3 /></div>
                <div className="skill-description">CSS</div>
            </div>
            <div className='skill-container'>
                <div className="skill"><DiJavascript /></div>
                <div className="skill-description">JavaScript</div>
            </div>
            <div className='skill-container'>
                <div className="skill"><DiReact /></div>
                <div className="skill-description">React</div>
            </div>
            <div className='skill-container'>
                <div className="skill"><DiPython /></div>
                <div className='skill-description'>Python</div>
            </div>
        </div>
    </div>
    )
}