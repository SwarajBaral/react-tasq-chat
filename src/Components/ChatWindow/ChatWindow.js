import React from "react";
import SendMessage from "../SendMessage.js/SendMessage";
import "./ChatWindow.css";

function ChatWindow(props) {
  let name = "Swaraj";
  return (
    <div className="chat-window container">
      <SendMessage name={name} />
    </div>
  );
}

export default ChatWindow;
