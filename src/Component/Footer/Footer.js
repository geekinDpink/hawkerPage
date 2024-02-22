import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';


export default function Footer() {
    return (
        <footer>
            <Container className="mt-5">
                    <Row>
                        <Col className={9}>
                            <Row>ABC Brickworks <br></br>Food Center</Row>
                            <Row>
                                <Col className={4}>Hawker Directory</Col>
                                <Col className={4}>Contact Us</Col>
                                <Col className={4}>Come on Board</Col>
                            </Row>

                        </Col>


                        <Col className={3}>
                            <div>
                                Follow us on:
                            </div>
                            <img src="photos/facebook.jpg" className="mr-2 ml-2" alt="Facebook Logo"></img>
                            <img src="photos/instagram.png" className="mr-2 ml-2" alt="Instagram Logo"></img>
                        </Col>


                    </Row>
            </Container>
        </footer>
    );
}