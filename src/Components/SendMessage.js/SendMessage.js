import React, { useState } from "react";
import "./SendMessage.css";

// Firebase stuff
import { db } from "../../firebaseApp";
import { collection, getDocs } from "@firebase/firestore";

function SendMessage({ name }) {
  const [msg, setMsg] = useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "texts"));
    let tempMsg = [];
    querySnapshot.forEach((doc) => {
      tempMsg.push({ ...doc.data(), id: doc.id });
    });
    setMsg(tempMsg);
  };
  const showMsg = () => {
    console.log(msg);
  };
  return (
    <div className="send-message">
      <ul align="center" className="all-text">
        {msg.map((text) => {
          return (
            <li key={text.id}>
              {text.txt} from {text.user}
            </li>
          );
        })}
      </ul>
      <div className="text-center">
        <button className="btn btn-primary mt-2 mb-2" onClick={fetchData}>
          Show all data
        </button>
        <button className="btn btn-primary mt-2 mb-2 mx-2" onClick={showMsg}>
          Show all data in console
        </button>
      </div>
    </div>
  );
}

export default SendMessage;
