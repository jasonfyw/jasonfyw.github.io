import React from 'react';
import ParticlesBg from 'particles-bg';
import ReactTypingEffect from 'react-typing-effect';

import './Intro.css';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import { LogoInstagram, MailOutline } from '../media/Ionicons';

function Intro(props) {
    return (
        <div className="intro section">
            <ReactTypingEffect text="Jason Wang" className="title" speed="65" eraseDelay="1000000" typingDelay="200" cursor="_" />
            <h4 className="subtitle"><span role="img" aria-label="countries">🇨🇦 🇨🇳 🇨🇿</span></h4>
            <h4 className="subtitle">
                An aspiring Computer Scientist with an interest in Software Engineering and Machine Learning
            </h4>
            <p className="links">
                <a href="https://github.com/jasonfyw" target="_blank" rel="noopener noreferrer">
                    <LogoGithub fontSize='1.75rem' color="#3B4252" />
                </a>
                &nbsp;&nbsp;
                <a href="https://instagram.com/jason_fyw" target="_blank" rel="noopener noreferrer">
                    <LogoInstagram color="#3B4252" />
                </a>
                &nbsp;&nbsp;
                <a href="mailto:jasonwang0610@gmail.com">
                    <MailOutline color="#3B4252" />
                </a>
            </p>
            <p className="links" style={{ 'marginTop': '2rem' }}>
                <IosArrowDown className="down-carat" fontSize='1.75rem' color="#3B4252" onClick={() => props.handlePageChange(1)}  />
            </p>
            {/* 'cobweb' good default, 'circle' would be good with custom colours */}
            <ParticlesBg type="cobweb" color="#5E81AC" bg={true} />
        </div>
    );
}

export default Intro;