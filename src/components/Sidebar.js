import React, { Component } from 'react';
import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';

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
        color: #D8DEE9;
    }
    &:focus {
        outline: none;
    }
`;

const NavSection = styled.button`
    font-family: 'Source Code Pro', monospace;
    color: #E5E9F0;
    background: #434C5E;
    font-size: 1rem;
    margin: 1.5rem;
    margin-top: 0.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border: ${props => props.active ? "2px solid #E5E9F0" : "0"};
    outline: none;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        background: #4C566A;
    }
    &:focus {
        outline: none;
    }
`;

const Nav = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const gitHubCalendarTheme = {
    background: 'transparent',
    text: '#E5E9F0',
    grade4: 'hsl(354.3,42.3%,56.5%)',
    grade3: 'hsl(354.3,42.3%,66.5%)',
    grade2: 'hsl(354.3,42.3%,76.5%)',
    grade1: 'hsl(354.3,42.3%,86.5%)',
    grade0: '#4C566A',
}

class Sidebar extends Component {

    activeSection = (sectionName) => {
        return this.props.activeSection === sectionName ? true : false;
    }

    render() {
        return (
            <div className="sidebar">
                <NavHeader
                    active={this.activeSection('intro')}
                    onClick={() => this.props.handlePageChange(0)}
                >
                    Jason Wang
                </NavHeader>
                <Nav>
                    <li>
                        <NavSection 
                            active={this.activeSection('about')} 
                            onClick={() => this.props.handlePageChange(1)}
                        >
                            About me
                        </NavSection>
                    </li>
                    <li>
                        <NavSection 
                            active={this.activeSection('projects')} 
                            onClick={() => this.props.handlePageChange(2)}
                        >
                            My projects
                        </NavSection>
                    </li>
                    <li>
                        <NavSection
                            active={this.activeSection('contact')}
                            onClick={() => this.props.handlePageChange(3)}
                        >
                            Contact
                        </NavSection>
                    </li>
                </Nav>

                <div className="github-calendar">
                    <GitHubCalendar username="jasonfyw" theme={gitHubCalendarTheme} showTotalCount={true} />
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
                        © 2020 Jason Wang – made with&nbsp;
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
