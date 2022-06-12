import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Carousel, Badge } from 'react-bootstrap';
import styled from 'styled-components';

import './Projects.css';
import { ChevronBack, ChevronForward } from '../media/Ionicons';
import PLISMUNSnapshot from '../media/projects/plismun_snapshot.png';
import CharitlonSnapshot from '../media/projects/charitlon_snapshot.png';
import PortfolioSnapshot from '../media/projects/portfolio_snapshot.png';
import OrbitalsimSnapshot from '../media/projects/orbitalsim_snapshot.png';
import TimeuntilSnapshot from '../media/projects/timeuntil_snapshot.png';
import ViralspreadSnapshot from '../media/projects/viralspread_snapshot.png';
import { OpenOutline } from 'react-ionicons';


const CarouselImg = styled.img`
    height: 65vh;
`;
const CarouselLink = styled.a`
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    color: #2E3440;
    transition: 0.2s;

    &:hover {
        color: #434C5E;
        text-decoration: none;
    }
`;
const LinkIcon = styled(OpenOutline)`
    font-size: 1.1rem;
    margin-bottom: 3px;
`;
const NavIcon = styled.div`
    padding: 0px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgba(229,233,240, 0.9);
    display: table;

    text-align: center;
`;
const NavIconInnerWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const PillPHP = styled(Badge)`
    background-color: #B48EAD;
    color: #ECEFF4;
`;
const PillJS = styled(Badge)`
    background-color: #EBCB8B;
    color: #ECEFF4;
`;
const PillPython = styled(Badge)`
    background-color: #A3BE8C;
    color: #ECEFF4;
`;
const PillReact = styled(Badge)`
    background-color: #D08770;
    color: #ECEFF4;
`;


class Projects extends Component {

    render() {
        return (
            <div className="projects section" name="projects">
                <div className="section-heading">
                    <h1>My projects</h1>
                </div>

                <Carousel 
                    interval={null} 
                    style={
                        { 
                            'height': '65vh', 
                            'width': '100%',
                            'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    
                        }
                    }
                    nextIcon = {
                        <NavIcon><NavIconInnerWrapper><ChevronForward color="#2E3440" /></NavIconInnerWrapper></NavIcon>
                    }
                    prevIcon = {
                        <NavIcon><NavIconInnerWrapper><ChevronBack color="#2E3440" /></NavIconInnerWrapper></NavIcon>
                    }
                >

                    <Carousel.Item>
                        <CarouselImg
                            // className="d-block w-100"
                            src={PLISMUNSnapshot}
                            alt="PLISMUN Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="https://plismun.com" target="_blank">PLISMUN <OpenOutline fontSize='1.2rem' style={{'marginBottom': '4px'}} /></CarouselLink>
                                <p>The official platform for the Park Lane International School MUN where delegates and delegations can apply for committees, as well as providing tools for chairs and administration. Custom-built administrative database tools are available for use by the organiserse.</p>
                                <p><PillPHP pill>PHP</PillPHP> <PillJS pill>JavaScript</PillJS></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={TimeuntilSnapshot}
                            alt="TimeUntil Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="http://timeuntil.imadethis.site/" target="_blank">TimeUntil <OpenOutline fontSize='1.2rem' style={{ 'marginBottom': '4px' }} /></CarouselLink>
                                <p>A simplistic web application displaying the time with scenic screensavers from Apple. Customised countdowns can also be set and displayed. Designed to be a browser start page.</p>
                                <p><PillReact pill>ReactJS</PillReact></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={PortfolioSnapshot}
                            alt="Personal portfolio"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="https://jasonfyw.github.io" target="_blank">Personal Portfolio <OpenOutline fontSize='1.2rem' style={{ 'marginBottom': '4px' }} /></CarouselLink>
                                <p>My current portfolio page! Designed and built in React by me with the help of some components.</p>
                                <p><PillReact pill>ReactJS</PillReact></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={OrbitalsimSnapshot}
                            alt="Start Formation Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="https://github.com/jasonfyw/orbitalsim" target="_blank">Orbital Simulation <OpenOutline fontSize='1.2rem' style={{ 'marginBottom': '4px' }} /></CarouselLink>
                                <p>A customisable and interactive Python simulation build over PyGame that models the orbits of celestial bodies in 2D space using Newton’s law of universal gravitation! Available to download and use with just a few clicks as a PyPI package!</p>
                                <p><PillPython pill>Python</PillPython></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={ViralspreadSnapshot}
                            alt="Viral Spread Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="https://github.com/jasonfyw/viralspread" target="_blank">Viral spread simulation <OpenOutline fontSize='1.2rem' style={{ 'marginBottom': '4px' }} /></CarouselLink>
                                <p>Utilising a custom physics module simulating particle movement, these simulations model the exponential nature of the spread of an infectious disease throughout a randomly moving population</p>
                                <p><PillPython pill>Python</PillPython></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={CharitlonSnapshot}
                            alt="Charitlon Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="http://prototype.charitlon.cz/" target="_blank">Charitlon <OpenOutline fontSize='1.2rem' style={{ 'marginBottom': '4px' }} /></CarouselLink>
                                <p>An upcoming website designed for an upcoming charity fundraiser event that I'm organising to place in spring of 2021 to raise funds for a local orphanage</p>
                                <p><PillReact pill>ReactJS</PillReact></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                
                <ParticlesBg type="cobweb" color="#81A1C1" bg={false} />
            </div>
        );
    }
    
}

export default Projects;




