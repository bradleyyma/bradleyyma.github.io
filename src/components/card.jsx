import React, { useState } from "react"
import {Collapse, Fade} from 'react-bootstrap'
import "./card.css"
import git from '../img/GitHub-Mark-32px.png'
function Class(props){
    const [open, setOpen] = useState(false);
    return(

            <div className="project">
                <div className="header">
                    <button onClick={() => setOpen(!open)} className='header-text'>
                        {props.data.name}
                    </button>
                </div>

                <Collapse in={open}>
                    <div id={`project${props.index}-details`}>
                        <div className="card-body">
                            {props.data.details}
                            <div className="project-links">
                                {props.data.git && <a href={props.data.git} target="_blank" rel="noreferrer"><img src={git}/></a>}
                                {props.data.link && <a href={props.data.link} target="_blank" rel="noreferrer" className='link'>View</a>}
                            </div>
                        </div>

                    </div>
                </Collapse>

            </div>
    )
}

export default Class
