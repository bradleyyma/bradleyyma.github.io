import React from "react"
import project_info from "./project_info.js"
import Card from "./card"
import './projects.css'
class Projects extends React.Component{
    constructor() {
        super();
        this.state = {
            projects : project_info
        }
    }

    render(){
        return (
            <div id="projects" className ="projects">
                <h1>Projects</h1>
                <div className="project-names">
                    {this.state.projects.map((v, index) => (
                      <Card key={index} data={v} index={index} />
                    ))}
                </div>


            </div>
        )
    }

}

export default Projects
