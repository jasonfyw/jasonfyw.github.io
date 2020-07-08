import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Carousel, Badge } from 'react-bootstrap';
import styled from 'styled-components';

import './Projects.css';
import { ChevronBack, ChevronForward } from '../media/Ionicons';
import PLISMUNSnapshot from '../media/projects/plismun_snapshot.png';
import CharitlonSnapshot from '../media/projects/charitlon_snapshot.png';
import PortfolioSnapshot from '../media/projects/portfolio_snapshot.png';
import StarFormationSnapshot from '../media/projects/starformation_snapshot.png';
import TimeuntilSnapshot from '../media/projects/timeuntil_snapshot.png';
import ViralspreadSnapshot from '../media/projects/viralspread_snapshot.png';
import MdOpen from 'react-ionicons/lib/MdOpen';


const CarouselImg = styled.img`
    height: 65vh;
`;
const CarouselLink = styled.a`
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    color: #2E3440;

    &:hover {
        color: #2E3440;
        text-decoration: none;
    }
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
            <div className="projects section">
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
                                <CarouselLink href="https://plismun.com" target="_blank">PLISMUN <MdOpen /></CarouselLink>
                                <p>The official website for Park Lane International School MUN where information regarding the conference is found, as well as a service to login and register to participate. Also contains administrative tools to manage the secure user database</p>
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
                                <CarouselLink href="http://timeuntil.imadethis.site/" target="_blank">TimeUntil <MdOpen /></CarouselLink>
                                <p>A simplistic web application displaying the time and custom event countdowns with scenic screensavers from Apple. Designed to be a browser start page</p>
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
                                <CarouselLink href="https://jasonfyw.github.io" target="_blank">Personal Portfolio <MdOpen /></CarouselLink>
                                <p>My personal portfolio website you are viewing right now. Built from scratch using ReactJS.</p>
                                <p><PillReact pill>ReactJS</PillReact></p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={StarFormationSnapshot}
                            alt="Start Formation Screenshot"
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption-text">
                                <CarouselLink href="https://github.com/jasonfyw/py_physics_sim" target="_blank">Star Formation Simulation <MdOpen /></CarouselLink>
                                <p>Using a custom Python module, I built a series of physics simulations using core concepts. One of which simulates the interactions of celestial bodies in space, aimed at replicating the formation of stars through the accumulation of mass</p>
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
                                <CarouselLink href="https://github.com/jasonfyw/viralspread" target="_blank">Viral spread simulation <MdOpen /></CarouselLink>
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
                                <CarouselLink href="http://prototype.charitlon.cz/" target="_blank">Charitlon <MdOpen /></CarouselLink>
                                <p>An upcoming website designed for an upcoming charity fundraiser event that I'm organising to place in spring of 2021</p>
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




