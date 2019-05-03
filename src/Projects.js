import React from 'react';
import ProjectBox from './ProjectBox';

import './Projects.css';

const Projects = ({ list }) => (
    <div className="projectPage" >
        <div className="title">
            <h1>My Projects</h1>
        </div>
        <div className="fullLine" />
        <div className="project">
            {list.map(({img, title, shortDesc, longDesc, href, key}) => (
                <ProjectBox img={img} title={title} key={key} shortDesc={shortDesc} longDesc={longDesc} href={href} />
            ))}
        </div>
    </div>
)

export default Projects