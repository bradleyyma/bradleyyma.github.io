import {Navbar} from 'react-bootstrap';
import './nav.css';
function Nav(props) {
    return(
        <Navbar className="side-nav">
                <a href="#about-me">About Me</a>

                <a href="#projects">Projects</a>
        </Navbar>
    )
}

export default Nav;
