import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import "../styles/contact.css";

import Footer from "../components/Footer/Footer";
const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
        <Header />
      <CommonSection title="Contact" />
      <section className="contactbg">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4 contact-header">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <label htmlFor="name">Your Name</label>
                  <Input placeholder="Your Name" type="text" name="name"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <label htmlFor="email">Your Email</label>
                  <Input name="email" placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    rows="4"                  
                    placeholder="Enter Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Pune, India
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 9852345623</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">dsc@vit.edud</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </Helmet>
  );
};

export default Contact;