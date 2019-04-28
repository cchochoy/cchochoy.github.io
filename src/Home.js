import React from 'react';
import profile from './img/test.png';

import './Home.css';

const Home = () => (
    <div className="home">
        <img src={profile} alt="me" />
        <h1>Welcom on my personal website !</h1>
        <p>I am an IT security student</p>
        <p>Work in progress ...</p>
    </div>
)

export default Home