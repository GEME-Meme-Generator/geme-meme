import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/chat.css";
import firebase from "../firebase";
import Message from "./Message";
import { useHistory } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [userData, setUserData] = useState("");
  const [input, setInput] = useState("");

  
  const addPost = (e) => {
    e.preventDefault();
    if (input) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .collection("posts")
        .add({
          Name: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

  useEffect(() => {
    if (roomId) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data()?.name);
        });
    }
    firebase
      .firestore()
      .collection("rooms")
      .doc(roomId)
      .collection("posts")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              Name: doc.data().Name,
              id: doc.id,
              timestamp: doc.data()?.timestamp,
            };
          })
        );
      });

    var user = firebase.auth().currentUser;
    if (user) {
     firebase.firestore().collection('users')
      .doc(user.uid).get()
      .then((doc)=>setUserData(doc.data()))
    }
  }, [roomId]);
 

  const submit = (e) => {
    e.preventDefault();
    if (roomId) {
      if (value) {
        firebase
          .firestore()
          .collection("rooms")
          .doc(roomId)
          .collection("messages")
          .add({
            image: userData.photo,
            message: value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: userData.name,
          });
      }
    }
    setValue("");
  };

  const selectPost = (post) => {
    history.push(`/rooms/${roomId}/${post.id}`);
  };

//  console.log(posts);

  return (
    <div className="container">
    <div
      style={{ display: "flex", flexDirection: "column",}}
      className="paddingL"
    >
      <p className="App text-left h4 pt-3"># Chat Section </p>
      <strong className="h5"># {roomDetails}</strong>
      <Message roomId={roomId} />
      <form className="App text-left">
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          style={{ display: "none" }}
        >
          send
        </button>
      </form>
    
      <hr></hr>
      <p className="App text-left h4 pt-3"># Post Section </p>
      <form className="App text-left">
        <input onChange={(e) => setInput(e.target.value)} value={input}></input>
        <button type="submit" onClick={(e) => addPost(e)}>
          create Post
        </button>
      </form>
      {posts.map((post, id) => {
        return (
          <h2 key={id} onClick={() => selectPost(post)}>
            {post.Name}{" "}
          </h2>
        );
      })}
    </div>
    </div>
  );
};

export default Chat;
