import React from 'react';
import "./Slider.css";
import logo from "../assert/logo.png";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../header/Header.css"
import facebook from "../assert/facebook.png";
import linkedin from "../assert/linkedin.png";
import whatsapp from "../assert/whatsapp.png";
import youtube from "../assert/youtube.png";
import instagram from "../assert/instagram.png";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

function Slider() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-heading' expand="lg" bg="#fff" variant="dark" style={{ padding: '25px 30px', width: '100%', justifyContent: 'space-between', position: 'fixed' }}>
                    <div>
                        <Navbar.Brand className='logo-list'>
                            <img src={facebook} alt="Logo" className='logo-list-logo' />
                            <img src={linkedin} alt="Logo" className='logo-list-logo' />
                            <img src={whatsapp} alt="Logo" className='logo-list-logo' />
                            <img src={youtube} alt="Logo" className='logo-list-logo' />
                            <img src={instagram} alt="Logo" className='logo-list-logo' />
                        </Navbar.Brand>
                    </div>
                    <div className=''>
                        <Nav className="mr-auto">
                            <Nav.Link className='' style={{ color: 'rgba(19, 136, 205, 1)', color: 'white' }} href="#home">
                                <span style={{ color: 'white' }}> <BsFillTelephoneFill /> 917725858277</span></Nav.Link>
                            <hr />
                            <Nav.Link className='' style={{ color: 'rgba(19, 136, 205, 1)', color: 'white' }} href="#about">
                                <span style={{ color: 'white' }}><MdEmail /> sales@rashailautomation.com</span></Nav.Link>
                        </Nav>
                    </div>
                </div>
                <Navbar className='second-nav' collapseOnSelect expand="lg" bg="#fff" variant="dark">
                    <div >
                        <Navbar.Brand className='logo'><img src={logo} alt="Logo" style={{ width: '150px' }} /></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <div >
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto menu">
                                <Nav.Link className='navbar-menu' style={{ color: 'rgba(19, 136, 205, 1)' }} as={Link} to="/product">
                                    {/* <Nav.Link as={Link} to="/contact">anywords</Nav.Link> */}
                                    {/* <Link to="/product">About Us</Link> */}
                                    About Us
                                </Nav.Link>
                                <Nav.Link className='navbar-menu' style={{ color: 'rgba(19, 136, 205, 1)' }} as={Link} to="/product">
                                    {/* <Link to="/product">Products</Link> */}
                                    Products
                                </Nav.Link>
                                <Nav.Link className='navbar-menu' style={{ color: 'rgba(19, 136, 205, 1)' }} as={Link} to="/product-list">
                                    {/* <Link to="/product-list">Cart</Link> */}
                                    Cart
                                </Nav.Link>
                                <Nav.Link className='navbar-menu' style={{ color: 'rgba(19, 136, 205, 1)' }} as={Link} to="/contact">
                                    {/* <Link to="/contact">Contact Us</Link> */}
                                    Contact Us
                                </Nav.Link>
                                <button type="button" className="navbar-button">Contact</button>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <div className='reviews'>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>
                <div className='singleReview'>
                    <div className='mini-div-img'>
                        <img className='mini-div-img' src={logo} alt='img' />
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}><strong>GSM Motor Controllerr</strong></p>
                        <div className='reviewDetails'>
                            <p>Mhow</p>
                            <p>-Mr.Shubham Patidar</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slider
