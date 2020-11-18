import {useState, useEffect} from 'react'
import profile from '../img/Ma.Bradley.jpg';
import logo_git from '../img/GitHub-Mark-32px.png'
import logo_li from '../img/LI-In-Bug.png'
import './intro.css'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
function Intro () {
    const data_rotate = ["college", "Javascript", "coding in Python", "React", "a pandemic (Stay safe)"]
    const [index, setIndex] = useState(0)

    useEffect( () => {
        const interval = setInterval( () => {
            setIndex(index => (index + 1) % data_rotate.length);
        }, 5000);
        return () => clearInterval(interval);
    })
    return (
        <header id="about-me" className="App-header">
          <div className="">
            <div className="">
              <div className="profile-frame">
                <img src={profile} alt="Headshot" className="profile-pic"/>
              </div>
              <h1 className="myname">Bradley Ma</h1>
                <div className="links">
                    <div className="row">
                        <a href="https://github.com/bradleyyma" target="_blank">
                            <img src={logo_git} alt="GitHub" className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/bradleyyma/" target="_blank">
                            <img src={logo_li} alt="LinkedIn" className="icon"/>
                        </a>
                    </div>
                    <div className="row">
                        <a href="https://docs.google.com/document/d/1QOEAiRLSEbMEwohLhvCo5oO6pB2tsH_aj5HqOF6SlG4/edit?usp=sharing" target="_blank">
                            <button className="resume">Resume</button>
                        </a>
                    </div>

              </div>
            </div>
            <div className="aboutme">
              <p className="">Hi and welcome! I am currently a computer science student at the University of Colorado Boulder. I code a bit, but I could definitely learn more. This site is here to show my progress and what I've created so far.  </p>
              <p>
                  Currently experiencing:
                  <Typist key={index} className="carousel">
                       {data_rotate[index]}
                       <Typist.Backspace count={data_rotate[index].length} delay = {1000} />
                  </Typist>
              </p>
            </div>
          </div>
          <a href="#projects" className="arrow">&#8681;</a>
        </header>
    )

}

export default Intro;
