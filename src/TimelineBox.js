import React from 'react';

import './TimelineBox.css';

const TimelineBox = ({ data }) => (
    <div className="timelineBox">
        <div className="content">
            <div className="boxHeader">
                <time>{data.date} - {data.city}</time>
            </div>
            <h1 className="tag"  style={{ background: data.tag.color }}>
                {data.tag.type}
            </h1>
            <div className="boxTitle">
                {!data.logo && <h2>{data.text}</h2>}
                {data.logo && <img className="logo" src={data.logo} alt="logo" />}
            </div>
            <p className="subtext" >{data.subtext}</p>
            <div className="labelDiv">
                {data.label && data.label.map(( label ) => (
                    <span className="label">{label}</span>
                ))}
            </div>
            <div className="linkDiv">
                {data.link && (
                    <a href={data.link.url} target="_blank" rel="noopener noreferrer" >
                        {data.link.text}
                    </a>
                )}
            </div>
            <span className="circle" />
        </div>
    </div>
)

export default TimelineBox