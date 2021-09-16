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
    <div className="footer">
      <form onSubmit={onSubmit}>
        <div className="inputbar">
          <input type="text" className="cinput" ref={chatMessage} />
          <button className="cbutton" type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
