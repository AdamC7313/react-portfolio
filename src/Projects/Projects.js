import './Projects.css';

export default function Projects() {
    return(
        <div className="projects content">
                <ul>
                    <div className="title top-project"><li>CLOCK</li> 
                    <a className='site-link' href='https://clock-by-adam.netlify.app' target='_blank' rel="noreferrer">site</a>
                    <a href='https://github.com/AdamC7313/clock_app' target='_blank' rel="noreferrer">code</a></div>
                    <div className="description"><li>This was my first project in React.js, and I don't think I knew how tough it 
                        would be when I jumped into it. The app includes a stopwatch, timer, clock and alarm.<br /><br /> 
                        Each component shows my ability to create and manage state in React.js using Hooks like <code>useEffect()</code> and <code>useState()</code>.<br /><br />
                        This project also allowed me the opportunity to effectively use Github for versioning and learn how useful it can be. <br /><br />
                        I kept the design simple but sleek. As can be seen by my portfolio and the other projects here, 
                        I'm a fan of minimalist but purposeful design.
                        </li></div>
                    <div className="title"><li>Project2</li></div>
                    <div className="description"><li>Project2 Description Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Donec sit amet nisl nec felis scelerisque 
                        elementum id ut dui.</li></div>
                    <div className="title"><li>Project3</li></div>
                    <div className="description"><li>Project3 Description Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Donec sit amet nisl nec felis scelerisque 
                        elementum id ut dui.</li></div>
                    <div className="title"><li>Project4</li></div>
                    <div className="description"><li>Project4 Description Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Donec sit amet nisl nec felis scelerisque 
                        elementum id ut dui.</li></div>
                </ul>
            </div>
    )
}