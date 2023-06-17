import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";
import insta from '../assets/all-images/instagram.png';
import twi from '../assets/all-images/twitter.png';
import git from '../assets/all-images/github.png';
import fb from '../assets/all-images/facebook.png';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textareas"
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
                  1216 Mirpur-2, Dhaka, Bangladesh
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+088 01700 000021</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    carrental21@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                    <div className="main">
                      <div className="up">
                        <button className="card1">
                          <img src={insta} alt="" className="social_icon instagram" />
                        </button>
                        <button className="card2">
                          <img src={twi} alt="" className="social_icon twitter" />
                        </button>
                      </div>
                      <div className="down">
                        <button className="card3">
                          <img src={git} alt="" className="social_icon github" />
                        </button>
                        <button className="card4">
                          <img src={fb} alt="" className="social_icon facebook" />
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
