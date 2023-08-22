import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Product.css";
import hand from "../assert/hand.png";
import { Row, Col } from "react-bootstrap"
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assert/logo.png"
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
import Slider from '../slider/Slider';
import { List } from 'antd/es/form/Form';
import Contact from "../contact/Contact"


function ProductDetails() {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        try {
            const response = await axios.get('https://dhruvj02.pythonanywhere.com/api/product/5394efab-9533-415b-a920-4147d7d7893e', {
                headers: {
                    Authorization: 'Token 543c793bba983edb993f167c8f01586cc4fbd49b'
                }
            });
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

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
            <div>
                {/* <div>
                <h1>Product Details</h1>
                <p>Product Name: {product.product_name}</p>
                <p>Description: {product.product_description}</p>
                <p>Stock: {product.product_stock}</p>
                <p>Price: ${product.product_price}</p>
                <p>Discount: {product.product_discount}%</p>
                <h2>Technical Details:</h2>
                <ul>
                    {product.product_downloads?.technical_details?.map((detail, index) => (
                        <li key={index}>{detail.Phase}: {detail['Power Requirement']}</li>
                    ))}
                </ul>
                <h2>Additional Details:</h2>
                <ul>
                    {product.product_downloads?.additional_details?.map((detail, index) => (
                        <li key={index}>{detail['Power Consumption']}, {detail['Motor Power']}</li>
                    ))}
                </ul>
                <p>Video URL: <a href={product.product_vedio_url} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
                <p>Meta Data: {product.meta_data}</p>
                <p>Extra Data: {product.extra_data}</p>
            </div>  */}
                <Row className='product-perent-div' style={{ padding: '20px 50px' }} >
                    <Col style={{ width: '35%' }}>
                        <img src={hand} />
                    </Col>
                    <Col style={{ width: '65%' }}>
                        <div>
                            <h1>{product.product_name}</h1>
                            <strong style={{ color: 'rgba(19, 136, 205, 1)' }}>Available</strong>
                            <p>{product.product_discount}% Off</p>
                            <strong>Price: <span className='text'>$499</span><span style={{ color: 'rgba(19, 136, 205, 1)' }}> ${product.product_price}</span></strong>
                            <p><strong>{product.extra_data}</strong></p>
                            <h3>Key Features of the Auto-Switch:</h3>
                            <p>{product.product_description}</p>
                            <div className='button-div-list'>
                                <button type="button" className="navbar-button3">
                                    - <span className="gap"></span> 1 &nbsp; <span className="gap"> +</span>
                                </button>
                                <button type="button" className="navbar-button2">Remove</button>
                                <button type="button" className="navbar-button">Go To Card</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: '10px 50px' }}>
                    <Col>
                        <div>
                            <h4>Technical Details:</h4>
                            {product.product_downloads?.technical_details?.map((detail, index) => (
                                <p key={index}>
                                    {detail.Phase}{detail['Power Requirement']}
                                </p>
                            ))}
                        </div>
                    </Col>
                    <Col>

                        <div>
                            <h4>Additional Details:</h4>
                            {product.product_downloads?.additional_details?.map((detail, index) => (
                                <p key={index}>
                                    {detail['Power Consumption']}{detail['Motor Power']}
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: '10px 50px' }}>
                    <div>
                        <h3 style={{ color: ' rgba(19, 136, 205, 1)' }}><strong>OTHER PRODUCT DETAILS</strong></h3>
                        <div style={{ lineHeight: '3px', marginTop: '20px' }}>
                            <p>*3 Months Domestic Warranty</p>
                            <p>*No Return Appllicable</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <h3 style={{ color: ' rgba(19, 136, 205, 1)' }}><strong>IMPORTANT INFORMATION</strong></h3>
                        <p> <strong>Safety Information</strong></p>
                        <p>Call +91 8349503619 | +91 7725858277 before purchase</p>
                        <p><strong>Legal Disclaimer</strong></p>
                        <p>Call +91 8349503619 | +91 7725858277 before purchase</p>
                    </div>
                </Row>
            </div>
            <List/>
            <Slider/>
            <Contact/>
        </div>
    );
}

export default ProductDetails;
