import React from 'react';
import ParticlesBg from 'particles-bg';
import LogoGithub from 'react-ionicons/lib/LogoGithub';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="intro">
                <h1 className="title">Jason Wang</h1>
                <h4 className="subtitle"><span role="img" aria-label="countries">🇨🇦 🇨🇳 🇨🇿</span></h4>
                <h4 className="subtitle">
                    An aspiring Computer Scientist with an interest in Software Engineering and Artificial Intelligence
                </h4>
                <p className="links">
                    <a href="https://github.com/jasonfyw" target="_blank" rel="noopener noreferrer"><LogoGithub fontSize='1.75rem' /></a>
                </p>
                {/* 'cobweb' good default, 'circle' would be good with custom colours */}
                <ParticlesBg type="cobweb" color="#5E81AC" bg={true} />
            </div>
        </div>
    );
}

export default App;
