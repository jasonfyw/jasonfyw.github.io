import React from 'react';
import ParticlesBg from 'particles-bg';

import './Intro.css';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import { LogoInstagram, MailOutline } from '../media/Ionicons';

function Intro(props) {
    return (
        <div className="intro section">
            <h1 className="title">Jason Wang</h1>
            <h4 className="subtitle"><span role="img" aria-label="countries">🇨🇦 🇨🇳 🇨🇿</span></h4>
            <h4 className="subtitle">
                An aspiring Computer Scientist with an interest in Software Engineering and Machine Learning
                        </h4>
            <p className="links">
                <a href="https://github.com/jasonfyw" target="_blank" rel="noopener noreferrer">
                    <LogoGithub fontSize='1.75rem' />
                </a>
                &nbsp;&nbsp;
                <a href="https://instagram.com/jason_fyw" target="_blank" rel="noopener noreferrer">
                    <LogoInstagram />
                </a>
                &nbsp;&nbsp;
                <a href="mailto:jasonwang0610@gmail.com">
                    <MailOutline />
                </a>
            </p>
            <p className="links" style={{ 'marginTop': '2rem' }}>
                <IosArrowDown className="page-link" fontSize='1.75rem' onClick={() => props.handlePageChange(1)}  />
            </p>
            {/* 'cobweb' good default, 'circle' would be good with custom colours */}
            <ParticlesBg type="cobweb" color="#5E81AC" bg={true} />
        </div>
    );
}

export default Intro;