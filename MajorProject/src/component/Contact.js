import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBJumbotron,
  MDBContainer,
} from "mdbreact";
import firebase from "../firebase";
import "./Css/Contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [massage, setMassage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name) {
      if (email) {
        if (phone) {
          if (company) {
            if (massage) {
              // firebaseall.database().ref("contact-home").push({
                // name,
                // email,
                // phone,
                // company,
                // massage,
              // });
              firebase
              .firestore()
              .collection("contactUS")
              .add({
                name,
                email,
                phone,
                company,
                massage
              });
            }
          }
        }
      }
    } else {
      alert("please fill");
    }

    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMassage("");

    alert(
      "Thank you for your response.We'll revert back to you soon through mail."
    );
  };

  return (
    <div className="font-head">
      <MDBJumbotron
        style={{ background: "linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)" }}
      >
        <h2 className=" font-weight-bold mb-0 pt-md-2 text-center text-dark font-heading">
          Contact Us
        </h2>
        <h5 className="display-6 mb-0 pt-md-2 text-center text-dark font-body">
          Question? Comments! Suggestions? We are always here to help you.
        </h5>
      </MDBJumbotron>
      <div>
        <MDBContainer>
          <section className="contact-section my-5">
            <MDBCard>
              <MDBRow>
                <MDBCol lg="8">
                  <MDBCardBody className="form font-body">
                    <h3 className="mt-4">
                      <MDBIcon icon="envelope" className="pr-2 amber-text" />
                      Write to us:
                    </h3>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-name"
                            label="Your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="email"
                            id="form-contact-email"
                            label="Your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="number"
                            id="form-contact-phone"
                            label="Your phone"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-company"
                            label="Your company"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="textarea"
                            id="form-contact-message"
                            label="Your message"
                            required
                            value={massage}
                            onChange={(e) => setMassage(e.target.value)}
                          />
                          <MDBBtn
                            rounded
                            color="amber"
                            onClick={(e) => submit(e)}
                          >
                            <MDBIcon icon="paper-plane" />
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBCardBody className="contact text-center h-100 font-body">
                    <h3 className="my-4 pb-2">Contact information</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          <MDBIcon icon="map-marker-alt" className="pr-2" />
                          GIT, Jaipur, IN
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="phone" className="pr-2" />
                          +91 8521764695 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9950767846 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 6378010911 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 8107857186
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="envelope" className="pr-2" />
                          project39393@gmail.com
                        </p>
                      </li>
                    </ul>
                    <hr className="hr-light my-4" />
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </section>
        </MDBContainer>
      </div>
    </div>
  );
};

export default ContactUs;
