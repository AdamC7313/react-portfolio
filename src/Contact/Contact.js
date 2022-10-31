import './Contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return(
    <div className="contact-container">
        <div  className='contact-word'>
        <h3>Contact:</h3>
        </div>
            <a href="https://www.linkedin.com/in/adamdcruz/" 
            className="linkedin contact-button button" 
            target="_blank"
            rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="mailto:AdamC7313@gmail.com" 
            className="e-mail contact-button button" 
            target="_blank"
            rel="noreferrer">
                <MdEmail />
            </a>
    </div>
    )
}