import './App.css';
import Hero from './components/Hero';
import Projects from './components/projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
