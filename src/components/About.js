import React from 'react';
import ParticlesBg from 'particles-bg';

import './About.css';


function About(props) {
    return (
        <div className="about section">
            <div className="section-heading">
                <h1>About me</h1>
            </div>
            
            <ParticlesBg type="square" color="#81A1C1" bg={false} />
        </div>
     );
}

export default About;