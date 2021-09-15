import { useRef } from "react";

const ChatInput = ({ onAdd }) => {
  const chatMessage = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.current.value) {
      onAdd({
        message: chatMessage.current.value,
        createdAt: new Date().toISOString(),
      });
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
