import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../../image/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <motion.section initial={{ y: -250 }} animate={{ y: -10 }} transition={{delay:0.5,  type: 'spring', stiffness:2500}} > 
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={4}>
                        <h1>We’re Finding Solution For Your Problems</h1>
                        <p className="text-muted"><small>Our Noboni Broadband Service have a wealth of experience.</small></p>
                        <motion.button whileHover={{scale:1.1, textShadow:'0px 0px 8px rgb(255 255 255)', boxShadow:'0px 0px 8px #17a2b8', transition:{duration:0.4, yoyo:'Infinity'}}} className='main-button'>Get Started</motion.button>
                    </Col>
                    <Col className="offset-md-1" md={6}>
                        <Image className="img-fluid" src='https://png.pngtree.com/png-clipart/20200401/original/pngtree-modern-flat-design-concept-of-internet-security-with-a-young-man-png-image_5332883.jpg' alt="..." />
                    </Col>
                </Row>
            </Container>
        </motion.section>
    );
};

export default Banner;