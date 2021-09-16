import "../styles/Chatwindow.css";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
import { useEffect, useRef } from "react";

const Chatwindow = ({ chats, onAdd }) => {
  const msg = useRef(null);
  useEffect(() => {
    if (msg) {
      msg.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className="chat-window">
      <div className="header"></div>
      <div className="canvas">
        <div className="screen" ref={msg}>
          {chats.map((data, i) => (
            <Chat key={i} data={data} />
          ))}
        </div>
      </div>
      <ChatInput className="iform" onAdd={onAdd} />
    </div>
  );
};

export default Chatwindow;
