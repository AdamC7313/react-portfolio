import './App.css';
import Contact from './Contact/Contact';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <h1 className='name'>Adam Cruz</h1>
      <h2 className='title'>Full Stack Web Developer</h2>
      <Contact />
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
