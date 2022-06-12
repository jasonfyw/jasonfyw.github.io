import React, { Component } from 'react';
import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Sidebar.css';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import { LogoInstagram, MailOutline } from '../media/Ionicons';

const NavHeader = styled.h1`
    padding: 0.5rem;
    margin: 1rem;
    margin-bottom: 3rem;
    border: ${props => props.active ? "2px solid #E5E9F0" : "0"};
    border-radius: 5px;
    outline: none;

    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
    color: #E5E9F0;
    font-size: 2rem;
    text-decoration: none;
    text-align: center;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        color: #D5DBE6;
    }
    &:focus {
        outline: none;
    }

    @media (max-width: 1400px) {
        font-size: 1.5rem;
    }
`;

const NavSection = styled.button`
    margin: 1.5rem;
    margin-top: 0.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
    outline: none;
    border-radius: 5px;
    transition: 0.2s;

    text-align: left;
    font-family: 'Source Code Pro', monospace;
    color: #E5E9F0;
    background: #434C5E;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        background: #4C566A;
    }
    &:focus {
        outline: none;
    }

    @media (max-width: 1400px) {
        font-size: 0.75rem;
    }
`;

const Nav = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const gitHubCalendarThemeRed = {
    background: 'transparent',
    text: '#E5E9F0',
    level4: 'hsl(354.3,42.3%,56.5%)',
    level3: 'hsl(354.3,42.3%,66.5%)',
    level2: 'hsl(354.3,42.3%,73.5%)',
    level1: 'hsl(354.3,42.3%,86.5%)',
    level0: '#4C566A',
}
const gitHubCalendarThemeGreen = {
    background: 'transparent',
    text: '#E5E9F0',
    level4: 'hsl(92.4,27.8%,54.7%)',
    level3: 'hsl(92.4,27.8%,66.7%)',
    level2: 'hsl(92.4,27.8%,78.7%)',
    level1: 'hsl(92.4,27.8%,90.7%)',
    level0: '#4C566A',
}
const gitHubCalendarThemeOrange = {
    background: 'transparent',
    text: '#E5E9F0',
    level4: 'hsl(14.4,50.5%,52.7%)',
    level3: 'hsl(14.4,50.5%,62.7%)',
    level2: 'hsl(14.4,50.5%,72.7%)',
    level1: 'hsl(14.4,50.5%,82.7%)',
    level0: '#4C566A',
}

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <NavHeader
                    onClick={() => scroll.scrollToTop()}
                >
                    Jason Wang
                </NavHeader>
                <Nav>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                            <NavSection>
                                About me
                            </NavSection>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                            <NavSection>
                                My projects
                            </NavSection>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                            <NavSection>
                                Contact
                            </NavSection>
                        </Link>
                    </li>
                </Nav>

                <div className="github-calendar">
                    <GitHubCalendar username="jasonfyw" theme={gitHubCalendarThemeRed} blockRadius={1} blockMargin={2} />
                </div>

                <div className="footer">
                    <p className="links">
                        <a href="https://github.com/jasonfyw" target="_blank" rel="noopener noreferrer">
                            <LogoGithub fontSize='1rem' color="#E5E9F0" />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://instagram.com/jason_fyw" target="_blank" rel="noopener noreferrer">
                            <LogoInstagram color="#E5E9F0" />
                        </a>
                        &nbsp;&nbsp;
                        <a href="mailto:jasonwang0610@gmail.com">
                            <MailOutline color="#E5E9F0" />
                        </a>
                    </p>
                    <p>
                        © {new Date().getFullYear()} Jason Wang – made with&nbsp;
                        <svg class="heart" viewBox="0 0 32 29.6">
                            
                            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                            
                        </svg>
                        &nbsp;using ReactJS 
                    </p>
                </div>
            </div>
        );
    }
}
export default Sidebar;
