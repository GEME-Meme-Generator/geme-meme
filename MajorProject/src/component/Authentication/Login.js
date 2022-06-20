import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBIcon,
} from "mdbreact";
import "./Login.css";
import firebase, { provider_g, provider_fb, provider_tw } from "../../firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
  };

  const forgetPassword = () => {
    let email = prompt("Enter Your Email");
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("link Sent Successfully...");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const google = () => {
    firebase
      .auth()
      .signInWithPopup(provider_g)
      .then((result) => {
        let photo = result.user.photoURL;
        let name = result.user.displayName;
        
        firebase.firestore().collection("users").doc(result.user.uid).set({
          name,
          photo,
        });
      })
      .then(() => history.push("/"))
      .catch((e) => {
        alert(e.message);
      });
  };
  const facebook = () => {
    firebase
      .auth()
      .signInWithPopup(provider_fb)
      .then((result) => {
        let photo = result.user.photoURL;
        let name = result.user.displayName;
        firebase.firestore().collection("users").doc(result.user.uid).set({
          name,
          photo,
        });
      })
      .then(() => history.push("/"))
      .catch((e) => {
        alert(e.message);
      });
  };
  // const twitter = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider_tw)
  //     .then((result) => {
  //       let photo = result.user.photoURL;
  //       let name = result.user.displayName;
  //       firebase.firestore().collection("users").doc(result.user.uid).set({
  //         name,
  //         photo,
  //       });
  //     })
  //     .catch((e) => {
  //       alert(e.message);
  //     });
  // };
  return (
    <div>
      <div className="font-head">
        <div
          className=" shadow pb-5 pt-5"
          style={{
            background: "linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)",
          }}
        >
          <MDBContainer className="mt-3">
            {/* <h4 className="font-login text-center">Making you successful is our number one concern.</h4> */}
            <MDBRow style={{ display: "flex", justifyContent: "center" }}>
              <MDBCol md="6">
                <MDBCard className="p-5">
                  <form>
                    <p className="h3 text-center mb-5 font-heading">Log in</p>
                    <div className="grey-text font-body">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="p-1 pb-3">
                        <p className="font-small d-flex justify-content-end pb-3 float-left">
                          Not a member?
                          <Link to="/signup" className="blue-text ml-1">
                            Sign up
                          </Link>
                        </p>
                        <p className="font-small blue-text d-flex justify-content-end pb-3 float-right">
                          Forgot
                          <Link
                            to="#!"
                            className="blue-text ml-1"
                            onClick={() => forgetPassword()}
                          >
                            Password?
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="text-center mt-4 font-body">
                      <MDBBtn color="orange" onClick={() => SignIn()}>
                        Login
                      </MDBBtn>
                    </div>
                    <p className="text-center mt-5 font-body">
                      or Sign/Sign up with:
                    </p>
                    <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                      <Link to="#!">
                        <MDBIcon
                          fab
                          icon="facebook-f"
                          size="lg"
                          className="orange-text fa-lg p-2 m-2 fb-ic"
                          onClick={facebook}
                        />
                      </Link>
                      <Link to="#!">
                        <MDBIcon
                          fab
                          className="fa-google-plus-g orange-text fa-lg p-2 m-2 gplus-ic"
                          onClick={google}
                        />
                      </Link>
                    </MDBRow>
                  </form>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
