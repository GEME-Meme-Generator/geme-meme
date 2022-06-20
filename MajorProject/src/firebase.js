import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDnCBATE319Qfm5nvU6qKAbRZyGBWLGqDU",
  authDomain: "majorproject-28706.firebaseapp.com",
  projectId: "majorproject-28706",
  storageBucket: "majorproject-28706.appspot.com",
  messagingSenderId: "92647874063",
  appId: "1:92647874063:web:c2124e2bab7fad06f70d7a"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider_g = new firebase.auth.GoogleAuthProvider();
  var provider_fb = new firebase.auth.FacebookAuthProvider();
  var provider_tw = new firebase.auth.TwitterAuthProvider();
  export {provider_g} ;
  export {provider_fb} ;
  export {provider_tw} ;

  export default firebase;