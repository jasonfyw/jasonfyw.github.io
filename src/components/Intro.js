import React from 'react';
import ParticlesBg from 'particles-bg';
import ReactTypingEffect from 'react-typing-effect';

import './Intro.css';
import { LogoGithub, ChevronDown } from 'react-ionicons';
import { LogoInstagram, MailOutline, LogoLinkedIn } from '../media/Ionicons';

function Intro(props) {
    return (
        <div className="intro section">
            <ReactTypingEffect text="Jason Wang" className="title" speed="85" eraseDelay="1000000" typingDelay="650" cursor="_" />
            <h4 className="subtitle"><span role="img" aria-label="countries">🇨🇦 🇨🇳 🇨🇿</span></h4>
            <h4 className="subtitle">
                Computer Science and Mathematics student @ University of Toronto '25    
            </h4>
            <p className="links">
                <a href="https://linkedin.com/in/jasonfyw" target="_blank" rel="noopener noreferrer">
                    <LogoLinkedIn size="24px" color="#3B4252" />
                </a>
                &nbsp;&nbsp;
                <a href="https://github.com/jasonfyw" target="_blank" rel="noopener noreferrer">
                    <LogoGithub fontSize='1.75rem' color="#3B4252" />
                </a>
                &nbsp;&nbsp;
                <a href="https://instagram.com/jasonfyw" target="_blank" rel="noopener noreferrer">
                    <LogoInstagram color="#3B4252" />
                </a>
                &nbsp;&nbsp;
                <a href="mailto:jasonwang0610@gmail.com">
                    <MailOutline color="#3B4252" />
                </a>
            </p>
            <p className="links" style={{ 'marginTop': '2rem' }}>
                <ChevronDown className="down-carat" fontSize='1.75rem' color="#3B4252" onClick={() => props.handlePageChange(1)}  />
            </p>
            {/* 'cobweb' good default, 'circle' would be good with custom colours */}
            <ParticlesBg type="cobweb" color="#5E81AC" bg={true} />
        </div>
    );
}

export default Intro;