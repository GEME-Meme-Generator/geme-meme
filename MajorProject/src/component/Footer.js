import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <MDBFooter className="font-small pt-0 bg-gradient-footer">
        <MDBContainer>
          {/* <MDBRow
            className="pt-5 mb-3 text-center d-flex justify-content-center font-body"
            id="bgfooter"
          >
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <Link rel="noopener noreferrer" to="/">
                  Home
                </Link>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <Link to="/privacy">Privacy</Link>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <Link to="#!">Help</Link>
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <Link to="/contact">Contact</Link>
              </h6>
            </MDBCol>
          </MDBRow> */}
          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <MDBCol md="8" sm="12" className="mt-5 font-body">
              <p style={{ lineHeight: "1.7rem" }}>
                Memes are great - they're such a fun way of describing ideas and
                opinions. So it's no coincidence that I picked a meme generator.
                The app works by pulling a random meme image from an API and
                placing your text over the top of it to create your very own,
                personalized meme.
              </p>
            </MDBCol>
          </MDBRow>
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
          <MDBRow className="pb-3">
            <MDBCol md="12">
              <div className="mb-5 flex-center">
                <a
                  className="tw-ic ml-2"
                  rel="noopener noreferrer"
                  href="#!"
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
                </a>

                <a
                  className="li-ic ml-2"
                  rel="noopener noreferrer"
                  href="#!"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-4">
                    {" "}
                  </i>
                </a>
                <a
                  className="ins-ic ml-2"
                  rel="noopener noreferrer"
                  href="#!"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <Link to="/"> Geme</Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
