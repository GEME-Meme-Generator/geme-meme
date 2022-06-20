import React from "react";
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { MDBJumbotron } from "mdbreact";

export default function Index() {
  function myFunction(start, image1) {
    let count = Number(localStorage.getItem(image1)) || start;
    localStorage.setItem(image1, count + 1);
    return count;
  }

  let images = [
    { id: `./meme/meme (${myFunction(1, "label1")}).jpg` },
    { id: `./meme/meme (${myFunction(100, "label2")}).jpg` },
    { id: `./meme/meme (${myFunction(200, "label3")}).jpg` },
    { id: `./meme/meme (${myFunction(300, "label4")}).jpg` },
    { id: `./meme/meme (${myFunction(400, "label5")}).jpg` },
    { id: `./meme/meme (${myFunction(500, "label6")}).jpg` },
    { id: `./meme/meme (${myFunction(600, "label7")}).jpg` },
    { id: `./meme/meme (${myFunction(700, "label8")}).jpg` },
    { id: `./meme/meme (${myFunction(800, "label9")}).jpg` },
    { id: `./meme/meme (${myFunction(900, "label10")}).jpg` },
    { id: `./meme/meme (${myFunction(1000, "label11")}).jpg` },
    { id: `./meme/meme (${myFunction(1100, "label12")}).jpg` },
    { id: `./meme/meme (${myFunction(1200, "label13")}).jpg` },
    { id: `./meme/meme (${myFunction(1300, "label14")}).jpg` },
    { id: `./meme/meme (${myFunction(1400, "label15")}).jpg` },
    { id: `./meme/meme (${myFunction(1500, "label16")}).jpg` },
    { id: `./meme/meme (${myFunction(1600, "label17")}).jpg` },
    { id: `./meme/meme (${myFunction(1700, "label18")}).jpg` },
    { id: `./meme/meme (${myFunction(1800, "label19")}).jpg` },
    { id: `./meme/meme (${myFunction(1900, "label20")}).jpg` },
    { id: `./meme/meme (${myFunction(2000, "label21")}).jpg` },
    { id: `./meme/meme (${myFunction(150, "label22")}).jpg` },
    { id: `./meme/meme (${myFunction(250, "label23")}).jpg` },
    { id: `./meme/meme (${myFunction(350, "label24")}).jpg` },
    { id: `./meme/meme (${myFunction(450, "label25")}).jpg` },
    { id: `./meme/meme (${myFunction(550, "label26")}).jpg` },
    { id: `./meme/meme (${myFunction(650, "label27")}).jpg` },
    { id: `./meme/meme (${myFunction(750, "label28")}).jpg` },
    { id: `./meme/meme (${myFunction(850, "label29")}).jpg` },
    { id: `./meme/meme (${myFunction(950, "label30")}).jpg` },
    { id: `./meme/meme (${myFunction(1050, "label31")}).jpg` },
    { id: `./meme/meme (${myFunction(1150, "label32")}).jpg` },
    { id: `./meme/meme (${myFunction(1250, "label33")}).jpg` },
    { id: `./meme/meme (${myFunction(1350, "label34")}).jpg` },
    { id: `./meme/meme (${myFunction(1450, "label35")}).jpg` },
    { id: `./meme/meme (${myFunction(1550, "label36")}).jpg` },
    { id: `./meme/meme (${myFunction(1650, "label37")}).jpg` },
    { id: `./meme/meme (${myFunction(1750, "label38")}).jpg` },
    { id: `./meme/meme (${myFunction(1850, "label39")}).jpg` },
    { id: `./meme/meme (${myFunction(1950, "label40")}).jpg` },
    { id: `./meme/meme (${myFunction(2050, "label41")}).jpg` },
    { id: `./meme/meme (${myFunction(2150, "label42")}).jpg` },
    { id: `./meme/meme (${myFunction(510, "label43")}).jpg` },
    { id: `./meme/meme (${myFunction(610, "label44")}).jpg` },
    { id: `./meme/meme (${myFunction(710, "label45")}).jpg` },
    { id: `./meme/meme (${myFunction(910, "label46")}).jpg` },
    { id: `./meme/meme (${myFunction(1010, "label47")}).jpg` },
    { id: `./meme/meme (${myFunction(2010, "label48")}).jpg` },
    { id: `./meme/meme (${myFunction(2150, "label49")}).jpg` },
    { id: `./meme/meme (${myFunction(2250, "label50")}).jpg` },
  ];

  return (
    <div className="bgAtt">
      <div className="text-center">
        <MDBJumbotron
          style={{
            background: "linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)",
          }}
        >
          <h2 className=" font-weight-bold mb-0 pt-md-3 text-center text-dark font-heading">
            Welcome to Geme
          </h2>
          <h5 className=" font-weight-bold mb-0 pt-md-3 text-center text-dark font-heading1">
            A premier destination for meme generator and group disscussion area.
          </h5>
        </MDBJumbotron>
      </div>
      <div className="container">
        <Row xs={1} md={2} className="g-4">
          {images.map((image, i) => (
            <Col key={i + 1}>
              <div className="itemMeme">
                <img className="imgMeme" variant="top" src={image.id} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
