import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './login.css';

function Login() {
    return (
        <div className='page'>
            <div className="container">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-8 col-xs-10 card-sigin-main mx-auto my-auto py-45 justify-content-center">
                    <Card>
                        <div className='card-container'>
                            <Card.Header>    
                                <a href="#">
                                    <img className="sign-favicon ht-40" src="" alt="logo" />
                                </a>
                                <Card.Title>Welcome back!</Card.Title>
                                <h6 className="font-weight-semibold mb-4">Please sign in to continue.</h6>

                                <Nav variant='tabs' defaultActiveKey='#first'>
                                    <Nav.Item>
                                        <Nav.Link href="#first">Email</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Mobile no</Nav.Link>
                                    </Nav.Item>
                                    </Nav>
                            </Card.Header>
                            <Card.Body>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab5">
                                    
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email </Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter your password" />
                                            </Form.Group>
                                            <Button variant='success' type="submit" id='btn-signin'>
                                                Sign In
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                                <div className="main-signin-footer text-center mt-3">
                                    <div className="icons-container">
                                        <div className="facebook icon">
                                            <FaFacebookF />
                                        </div>
                                        <div className="twitter icon">
                                            <FaTwitter />
                                        </div>
                                        <div className="linkedin icon">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="instgram icon">
                                            <FaInstagram />    
                                        </div>                                   
                                    </div>
                                    <p><a href="#" className="mb-3">Forgot password?</a></p>
                                    <p>Don't have an account? <a href="#">Create an Account</a></p>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;