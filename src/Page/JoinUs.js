import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';

import {addVolunteer} from "../Service/FirestoreHelper";


export default function JoinUs() {

    const joinUsSchema = yup.object().shape({
        name: yup.string().required('Required'),
        phone: yup.number().min(10000000,"Invalid; Less than 8 Numbers").max(99999999,"Invalid; More than 8 Numbers").required('Required').integer('Numbers only'),
        email: yup.string().email('Email is invalid').required('Required'),
        interest: yup.string().required('Required'),
        msg: yup.string().required('Required')
    });

    return(
        <>
        <Container>
            <Row>
                <div style={{backgroundImage:"url(./photos/joinUs1.jpg)", height:"200px", backgroundSize:"cover"}}>
                    <Container>
                        <Row>
                            <Col className={4} style={{display:'flex', justifyContent:'center', fontWeight:'bold',alignItems:'center'}}>Collaborate with Us</Col>
                            <Col className={3}></Col>
                            <Col className={5} style={{display:'flex',justifyContent:'center', fontWeight:'bold',alignItems:'center'}}>Want to contribute towards this website and join us in revitalising Singapore's hawker culture? Fill in your contact details below!</Col>
                        </Row>
                    </Container>
                </div>
            </Row>
            <Row>
                <span className="joinUsSpan2">
                    <div className="joinUsDiv2Content">
                        <h3>Who are we?</h3>
                        <p>We are a group of passionate youths from the Leng Kee Youth Network striving to 
                            digitalise Queenstown's hawker landscape and promote our local hawker culture!</p>
                    </div>
                </span>
            </Row>
            <Row>
                <Container style={{backgroundColor:"aliceblue"}}>
                    <Row style={{justifyContent:'center', fontWeight:'bold'}}>Interested in joining us?</Row>
                    <Row style={{justifyContent:'center', marginBottom:'30px'}}>Fill in your details below and we will contact you! Alternatively, you can contact xxx at 91234567</Row>
                    <Row>
                        <Col md={4}>
                        <img src="./photos/joinUs3.jpg" alt="Queenstown Digital Hawker Virtual Food Fest Banner"></img>
                        </Col>
                        <Col md={8}>
                            <Container>
                                <Formik 
                                initialValues={{name:"", email: "", phone: "", interest: "", msg: ""}}
                                validationSchema = {joinUsSchema}
                                onSubmit = 
                                {
                                    async (values) => {
                                    alert(JSON.stringify(values, null, 10));
                                    console.log(JSON.stringify(values, null, 2));
                                    addVolunteer(values.name,values.email,values.phone,values.interest,values.msg);
                                  }
                                }>  
                                    <Form>
                                        <Row>        
                                            <Col md={2}>
                                                <label htmlFor="name">Name</label>
                                            </Col>
                                            <Col md={10}>
                                                <Field
                                                id="name"
                                                name="name"
                                                style={{width:"60%"}}
                                                />
                                                <ErrorMessage name="name" component="div"/>
                                            </Col>                        
                                        </Row>

                                        <Row style={{marginTop:"15px"}}>        
                                            <Col md={2}>
                                                <label htmlFor="email">Email Address</label>
                                            </Col>
                                            <Col md={10}>
                                                <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                style={{width:"60%"}}
                                                />
                                                <ErrorMessage name="email" component="div"/>
                                            </Col>                        
                                        </Row>

                                        <Row style={{marginTop:"15px"}}>
                                            <Col md={2}>
                                                <label htmlFor="phone">Phone</label>
                                            </Col>

                                            <Col md={10}>
                                                <Field
                                                id="phone"
                                                name="phone"
                                                type="number"
                                                style={{width:"60%"}}
                                                />
                                                <ErrorMessage name="phone" component="div"/>
                                            </Col>                        
                                        </Row>

                                        <Row style={{marginTop:"15px"}}>
                                            <Col md={2}>
                                                <label htmlFor="interest">Area of Interest</label>
                                            </Col>

                                            <Col md={10}>
                                                <Field
                                                id="interest"
                                                name="interest"
                                                type="interest"
                                                as ="select"
                                                style={{width:"60%"}}>
                                                    <option value=""></option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Web Design">Web Design</option>
                                                    <option value="Developer">Developer</option>
                                                    <option value="Content Creation">Content Creation</option>
                                                    <option value="Web Admin/Operation">Web Admin/Operation</option>
                                                </Field>
                                                <ErrorMessage name="interest" component="div"/>
                                            </Col>                        
                                        </Row>

                                        <Row style={{marginTop:"15px"}}>
                                            <Col md={2}>
                                                <label htmlFor="msg">Message</label>
                                            </Col>

                                            <Col md={10}>
                                                <Field
                                                as = "textarea"
                                                id="msg"
                                                name="msg"
                                                rows="6"
                                                style={{width:"60%"}}
                                                />
                                                <ErrorMessage name="msg" component="div"/>
                                            </Col>                        
                                        </Row>

                                        <Row style={{marginTop:"15px"}}>
                                            <Col md={2}></Col>
                                            <Col md={{span:8, offset:1}}>
                                                <button type="submit" style={{width:"50%"}}>Submit</button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Formik>
                            </Container>
                        </Col>
                    </Row>

                </Container>
            </Row>
        </Container>
        </>
    );
}