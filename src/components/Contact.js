import React from 'react';
import ParticlesBg from 'particles-bg';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './Contact.css';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import { LogoInstagram, MailOutline } from '../media/Ionicons';

const SocialLink = styled.a`
    margin-bottom: 10rem;

    color: #3B4252;
    text-decoration: none;
    font-size: 2.5rem;
    transition: 0.2s;

    &:hover {
        text-decoration: none;
        color: #4C566A;
        font-size: 3rem;
    }
`;

function Contact(props) {
    return (
        <div className="contact section" name="contact">
            <div className="section-heading">
                <h1>Contact me!</h1>
            </div>

            <Container>
                <SocialLink href="https://github.com/jasonfyw/" target="_blank">
                    <Row className="social-link">
                        <Col md={3}>
                            <LogoGithub fontSize="4rem" color="#3B4252" />
                        </Col>
                        <Col md={9}>
                            <h2>/jasonfyw</h2>
                        </Col>
                    </Row>
                </SocialLink>

                <SocialLink href="https://www.instagram.com/jasonfyw/" target="_blank">
                    <Row className="social-link">
                        <Col md={3}>
                            <LogoInstagram color="#3B4252" />
                        </Col>
                        <Col md={9}>
                            <h2>@jasonfyw</h2>
                        </Col>
                    </Row>
                </SocialLink>

                <SocialLink href="mailto:jasonwang0610@gmail.com">
                    <Row className="social-link email">
                        <Col md={3}>
                            <MailOutline color="#3B4252" />
                        </Col>
                        <Col md={9}>
                            <h2>jasonwang0610@gmail.com</h2>
                        </Col>
                    </Row>
                </SocialLink>



                {/* <Row>
                    <Col md={4}>
                        <SocialLink href="https://github.com/jasonfyw/" target="_blank">
                            <LogoGithub fontSize="4rem" color="#3B4252" />
                            <h2>/jasonfyw</h2>
                        </SocialLink>
                    </Col>
                    <Col md={4}>
                        <SocialLink href="https://www.instagram.com/jason_fyw/" target="_blank">
                            <LogoInstagram color="#3B4252" />
                            <h2>@jason_fyw</h2>
                        </SocialLink>
                    </Col>
                    <Col md={4}>
                        <SocialLink href="mailto:jasonwang0610@gmail.com">
                            <MailOutline color="#3B4252" />
                            <h2>jasonwang0610@gmail.com</h2>
                        </SocialLink>
                    </Col>
                </Row> */}
            </Container>


            <ParticlesBg type="square" color="#81A1C1" bg={false} />
        </div>
    );
}

export default Contact;
