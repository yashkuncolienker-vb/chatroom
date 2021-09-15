import "../styles/Chatwindow.css";
import ChatInput from "./ChatInput";
import Chat from "./Chat";

const Chatwindow = ({ chats, onAdd }) => {
  return (
    <div className="chat-window">
      <div className="header">Header</div>
      <div className="canvas">
        <div className="screen">
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
