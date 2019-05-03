import React from 'react';

import './SidePanel.css';

const SidePanel = ({ menus, onClick }) => (
    <div className="sidePanel" >
        <div class="card-container">
            <img class="round" src="https://www.w3schools.com/w3images/avatar2.png" alt="user" />
            <h3>Clément Chochoy</h3>
            <h6>Toulouse</h6>
            <p>IT security student and <br/> curious enthusiast</p>
        </div>
        <p className="fullLine" />
        <ul>
            {menus.map(({icon, name}) => (
                <Button icon={icon} name={name} key={name} onClick={onClick} />
            ))}
        </ul>
    </div>
)

const Button = ({ icon, name, onClick }) => (
    <div className="button" onClick={() => onClick(name)} >
        <li>{icon}&nbsp;&nbsp;{name}</li>
    </div>
)

export default SidePanel