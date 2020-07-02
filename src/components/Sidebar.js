import React, { Component } from 'react';
import styled from 'styled-components';

import './Sidebar.css';

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
                </Nav>

                <div className="footer">
                    {/* <p>© 2020 Jason Wang – made with <IosHeart color='#BF616A' fontSize="1rem" /> using ReactJS</p> */}
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
