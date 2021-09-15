import { useState, useRef } from "react";

const ChatInput = () => {
  const [chat, setChat] = useState({});
  const chatMessage = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.current.value) {
      
      console.log({message:chat, createdAt: Date.now()});
      chatMessage.current.value = "";
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={chatMessage} placeholder="Type Something" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ChatInput;
