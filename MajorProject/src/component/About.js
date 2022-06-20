import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./Css/About.css";

export default function About() {
  return (
    <div>
      <div className="text-center">
        <MDBJumbotron
          style={{
            background: "linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)",
          }}
        >
          <h2 className=" font-weight-bold mb-0 pt-md-3 text-center text-dark font-heading">
            About Us
          </h2>

          <blockquote className="blockquote mb-0">
            <p className="text-dark">
              Our cheif want in life is somebody who will make us do what we
              can.
            </p>
            <footer className="blockquote-footer text-dark">
              Ralph Waldo <cite title="Source Title">Emerson</cite>
            </footer>
          </blockquote>
        </MDBJumbotron>
        <MDBContainer className="mt-5 font-body">
          
        <p className="text-left h5">
            Memes are great - they're such a fun way of describing ideas and
            opinions. So it's no coincidence that I picked a meme generator. The
            app works by pulling a random meme image from an API and placing
            your text over the top of it to create your very own, personalized
            meme.<br/>
             • Memes are simple, succinct and explicit in their messages,
            and this cultural paradigm is a reflection of the mentality of
            modern society – one that values entertainment, champions
            materialism, and reinforces the need felt by people to remain
            relevant. <br/>
            • Memes don’t just cross languages either – their
            relatableness also forges a feeling of belonging among certain
            internet users in particular age groups.
          </p>
       
        </MDBContainer>
      </div>
    </div>
  );
}
