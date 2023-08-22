import React from "react";
import { Form, Input, Button } from "antd";
import "./Contact.css";
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

const ContactForm = () => {
  const [form] = Form.useForm();

  const authToken = "Token 543c793bba983edb993f167c8f01586cc4fbd49b";

  const onFinish = (values) => {
    console.log("Form Data======>", values);

    const formData = {
      ...values,
      store_id: "7d9f6272-781e-4a33-9cc1-020167be40b3"
    };

    console.log(JSON.stringify(formData));

    fetch("https://dhruvj02.pythonanywhere.com/api/enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res====>", res);
        // Handle API response as needed
      });
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
      <div className="contact-main-div">
        <div style={{ paddingLeft: "72px" }}>
          <h1 style={{ color: '#1273b8' }}>Add New User</h1>
        </div>
        <Form
          form={form}
          name="contact_form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Form.Item
              label="Name"
              name="enquiry_name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contact"
              name="enquiry_contact"
              rules={[
                {
                  required: true,
                  message: "Please input your contact!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Form.Item
              label="Email"
              name="enquiry_email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Subject"
              name="enquiry_subject"
              rules={[
                {
                  required: true,
                  message: "Please input the subject!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Form.Item
              label="Date"
              name="enquiry_date"
              rules={[
                {
                  required: true,
                  message: "Please input the date!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Status"
              name="enquiry_status"
              rules={[
                {
                  required: true,
                  message: "Please input the status!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Form.Item
              label="Notes"
              name="enquiry_notes"
              rules={[
                {
                  required: true,
                  message: "Please input the notes!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Message"
              name="enquiry_message"
              rules={[
                {
                  required: true,
                  message: "Please input the message!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item className="form-button-div">
            <Button className="navbar-button-form" type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
