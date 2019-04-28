import React from 'react';
import ProjectBox from './ProjectBox';

import './Projects.css';

const Projects = () => (
    <div className="projects">
        <div className="header">
            <h1>Projects</h1>
        </div>
        <div className="space" />
        <div className="row">
            <div className="column">
                <ProjectBox />
            </div>
            <div className="column">
                <ProjectBox />
            </div>
            <div className="column">
                <ProjectBox />
            </div>
        </div>
        <div className="row">
            <div className="column">
                <ProjectBox />
            </div>
            <div className="column">
                <ProjectBox />
            </div>
        </div>
    </div>
)

export default Projects