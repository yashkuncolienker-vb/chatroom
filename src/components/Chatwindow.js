import "../styles/Chatwindow.css";
import ChatInput from "./ChatInput";
import Chat from "./Chat";

const Chatwindow = ({ chats }) => {
  return (
    <div className="chat-window">
      <div className="header">Header</div>
      <div className="canvas">
        {chats.map( (data, i)=> <Chat key={i} data={data}/>)}
      </div>
      <ChatInput className="footer" />
    </div>
  );
};

export default Chatwindow;
