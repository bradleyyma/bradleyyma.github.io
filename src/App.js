import './App.css';
import Intro from './components/intro';
import Projects from './components/projects';
import Nav from './components/nav';
import {useState} from 'react';
function App() {
    const [section, setSection] = useState('about')
  return (
    <div className="App">
        <Intro id="about-me"/>
        <Projects id="projects"/>
    </div>
  );
}

export default App;
