import React from 'react';
import profile from './img/test.png';

import './SidePanel.css';

const SidePanel = ({ menus, onClick }) => (
    <div className="sidePanel" >
        <img src={profile} alt="me" />
        <p className="name">Clément</p>
        <p className="surname">Chochoy</p>
        <p className="job">IT Security student</p>
        <p className="fullLine" />
        <ul>
            {menus.map(({name}) => (
                <Button name={name} key={name} onClick={onClick} />
            ))}
        </ul>
    </div>
)

const Button = ({ name, onClick }) => (
    <div className="button" onClick={() => onClick(name)} >
        <li>{name}</li>
    </div>
)

export default SidePanel