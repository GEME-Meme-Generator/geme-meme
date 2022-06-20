import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import "./Signup.css";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [option, setOption] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const history = useHistory()

  // https://firebasestorage.googleapis.com/v0/b/majorproject-28706.appspot.com/o/user-286-128.png?alt=media&token=22c3cfd1-c883-4730-8887-5b11ebefe699
  const submit = (e) => {
    e.preventDefault();
    if (Cpassword === password) {
      if (email && password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            firebase.firestore().collection("users").doc(user.user.uid).set({
              name,
              phone,
              email,
              password,
              option,
              location,
              bio,
              photo:"https://firebasestorage.googleapis.com/v0/b/majorproject-28706.appspot.com/o/user-286-128.png?alt=media&token=22c3cfd1-c883-4730-8887-5b11ebefe699"
            });
            // alert('your are register')
            history.push('/')
          }).catch((err)=>{
            console.log(err)
            if(err.code = "auth/email-already-in-use"){
              alert('The email address is already in use by another account.')
            }
          });
         
      }
      // setTimeout(() => {
      //   alert("you are register");
      // }, 1000);
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setCpassword("");
      setOption("");
      setLocation("");
      setBio("");
    } else {
      alert("Password is not same ! ");
    }
  };
  return (
    <div>
      <div className="font-head">
        <div
          className=" shadow pb-5 pt-5"
          style={{
            background: "linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)",
          }}
        >
          <MDBContainer className="mt-5">
            <MDBRow className="signup1">
              <MDBCol md="6">
                <MDBCard className="p-5 font-singup">
                  <MDBCardBody>
                    <form onSubmit={(e) => submit(e)}>
                      <p className="h3 text-center py-1 font-heading">
                        Sign up
                      </p>
                      <div className="grey-text font-body">
                        <MDBInput
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          required
                        />
                        <MDBInput
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          label="Mobile Number"
                          icon="mobile"
                          group
                          type="Number"
                          validate
                          error="wrong"
                          success="right"
                          required
                        />
                        <MDBInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          required
                        />
                        <MDBInput
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          label="Your password"
                          icon="shield-alt"
                          group
                          type="password"
                          validate
                          required
                        />
                        <MDBInput
                          value={Cpassword}
                          onChange={(e) => setCpassword(e.target.value)}
                          label="Confirm Your password"
                          icon="shield-alt"
                          group
                          type="password"
                          validate
                          required
                        />
                        <select
                          className="browser-default custom-select"
                          onChange={(e) => setOption(e.target.value)}
                          required
                        >
                          <option value="">Choose user type</option>
                          <option value="Student">Age Below 18</option>
                          <option value="Mentor">Age Above 18</option>
                    
                        </select>
                        <MDBInput
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          label="Your Location(City)"
                          icon="map-marker-alt"
                          group
                          type="text"
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          label="Bio"
                          icon="info"
                          group
                          type="text"
                          validate
                        />
                      </div>
                      <p color="textSecondary" variant="body2">
                Have an account?{" "}
                <Link to="/login" variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </p>
                      <div className="text-center py-4 mt-3 font-body">
                        <MDBBtn color="orange" type="submit">
                          Register
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
