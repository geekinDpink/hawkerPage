import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import GoogleApiWrapper from '../Service/GoogleMap';

export default function ContactUs() {

    return(
        <>
        <Container>
        <Row style={{backgroundColor:"#f4fcf1"}}>
            <h3>About Queenstown Digital Hawkers</h3>
            <p>
            Queenstown Digital Hawkers is one of the projects run by the Leng Kee Youth Network, 
            a group of passionate youth from different backgrounds who run various social outreach initiatives around 
            Leng Kee Community Club.
            </p><br/><br/><br/>
            <p>
            Seeking to reach out to hawkers and help them adapt to a changing world, 
            we have sought to promote adoption of digital technologies among hawkers. 
            In addition to creating social media platforms for ABC Brickworks, 
            we have also helped run promotions in collaboration with specific stalls and organised the first 
            ever Virtual Foodfair out of ABC Brickworks in January 2021.
            </p>
        </Row>
        <Row style={{backgroundColor:"#fbf2f1", height:"500px"}}>
            <h3 style={{marginBottom:0}}>Our Location</h3>
            <Col style={{marginTop:0}}><GoogleApiWrapper/></Col>

        </Row>
        <Row style={{backgroundColor:"#f1fcfd"}}>
        <Col md={4} style={{marginTop:'35px'}}>
                <Card style={{ width: '18rem', backgroundColor:'#fbfecf', margin:'auto', cursor: 'pointer'}} 
                onClick={onClickCard1=>{window.open("https://www.facebook.com/abc.hawkers/");}}>
                    <Card.Img variant="top" src="./photos/FBBWIcon.png" style={{width:'50%', margin:"auto"}}/>
                    <Card.Body>
                        <Card.Text>
                        Follow our Facebook page for updates and posts regarding what's happening at ABC Brickworks  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} style={{marginTop:'35px'}}>
                <Card style={{ width: '18rem', backgroundColor:'#d8d9ff', margin:'auto', cursor: 'pointer'}}>
                    <Card.Img variant="top" src="./photos/EmailBWIcon.png" style={{width:'50%', margin:"auto"}}/>
                    <Card.Body>
                        <Card.Text>
                        Reach out to us via email at SAMPLEEMAIL@GMAIL.COM for inquiries and partnerships
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} style={{marginTop:'35px'}}>
                <Card style={{ width: '18rem', backgroundColor:'#d3eecc', margin:'auto'}}>
                    <Card.Img variant="top" src="./photos/InstaBWIcon.png" style={{width:'50%', margin:"auto", cursor: 'pointer'}} onClick={onClickCard3=>{window.open("https://www.instagram.com/abc.hawkers/?hl=en");}}/>
                    <Card.Body>
                        <Card.Text>
                        Follow our Instagram Page at @abc.hawkers for the latest events and regular posts
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
        </>

    );
}
