import React from 'react';

import './ProjectBox.css';

const ProjectBox = ({ img, title, shortDesc, longDesc, href }) => (
    <div className="projectBox">
        <div className="projectOverview">
            <img src={img} alt="_blank" />
            <div className="overview">
                <h1>{title}</h1>
                <p>{shortDesc}</p>
            </div>
        </div>
        <div className="projectContent">
            <p>{longDesc}</p>
            <a href={href} target="_blank">See More</a>
        </div>
    </div>
)

export default ProjectBox