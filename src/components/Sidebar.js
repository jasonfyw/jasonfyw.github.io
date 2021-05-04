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
    border: ${props => props.active ? "2px solid #E5E9F0" : "0"};
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
    grade4: 'hsl(354.3,42.3%,56.5%)',
    grade3: 'hsl(354.3,42.3%,66.5%)',
    grade2: 'hsl(354.3,42.3%,73.5%)',
    grade1: 'hsl(354.3,42.3%,86.5%)',
    grade0: '#4C566A',
}
const gitHubCalendarThemeGreen = {
    background: 'transparent',
    text: '#E5E9F0',
    grade4: 'hsl(92.4,27.8%,54.7%)',
    grade3: 'hsl(92.4,27.8%,66.7%)',
    grade2: 'hsl(92.4,27.8%,78.7%)',
    grade1: 'hsl(92.4,27.8%,90.7%)',
    grade0: '#4C566A',
}
const gitHubCalendarThemeOrange = {
    background: 'transparent',
    text: '#E5E9F0',
    grade4: 'hsl(14.4,50.5%,52.7%)',
    grade3: 'hsl(14.4,50.5%,62.7%)',
    grade2: 'hsl(14.4,50.5%,72.7%)',
    grade1: 'hsl(14.4,50.5%,82.7%)',
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
                    <GitHubCalendar username="jasonfyw" theme={gitHubCalendarThemeRed} showTotalCount={true} />
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
