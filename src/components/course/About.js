import React from 'react';
import logo from '../../TutotPoint_logo.png'

const About = () => {
    return (
        <div>
            <br/><br/><br/>
            <img src={logo} className="App-logo" width="300" height="300" alt=""/><br/><br/>
            by <h3>tutor.point@gmail.com</h3>
            <h1>Course Application</h1>
            <p>We can add, modify, update and delete course records</p>
        </div>
    );
};

export default About;