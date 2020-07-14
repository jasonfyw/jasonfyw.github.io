import React from 'react';
import ParticlesBg from 'particles-bg';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './About.css';
import Photo1 from '../media/DSC0279.JPG';
import Photo2 from '../media/DSC01215.jpg';

const Img = styled.img`
    width: 100%;
    margin: 1.25rem;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.19);


    @media (max-width: 600px) {
        display: none;
    }
`;

function About(props) {
    return (
        <div className="about section">
            <div className="section-heading">
                <h1>About me</h1>
            </div>

            <Container>
                <Row>
                    <Col sm={4} >
                        <p>Hi, my name’s Jason and I’m a high school senior current studying in the Czech Republic.</p>

                        <p>This is my personal site with my bio and some of the stuff I’ve worked on over the past few years</p>
                        <Img src={Photo1} alt="About me – Jason" />
                    </Col>
                    <Col sm={8}>
                        <Img src={Photo2} alt="About me – Jason " />
                        <p>Throughout high school I’ve been passionate about programming. I enjoy creating both frontend and backend applications, while also exploring data science and machine learning.</p>
                        <p>Python and Javascript are my languages of choice, while I also have experience with PHP and R.</p>
                        <p>Aside from programming, I’m passionate about music and guitar as well as being interested in photography, the stock market, cryptocurrency and a bunch of other stuff!</p>
                    </Col>
                </Row>
            </Container>
            
            <ParticlesBg type="circle" color="#D3D9E4" bg={false} />
        </div>
     );
}

export default About;