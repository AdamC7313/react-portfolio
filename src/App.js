import './App.css';
import Contact from './Contact/Contact';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <h1 className='name'>Adam Cruz</h1>
      <h2 className='job-title'>Full Stack Web Developer</h2>
      <Contact />
      <Nav />
      <div className='content-container'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
