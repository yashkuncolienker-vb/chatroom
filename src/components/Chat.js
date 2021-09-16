import ReactTimeAgo from "react-time-ago";
import "../styles/Chat.css";
import { Image } from "react-bootstrap";
import uImage from "../assets/user.png";
import aImage from "../assets/agent.png";

const Chat = ({ data }) => {
  const bool = data.sender === "user";
  return (
    <div
      className={`chat ${ bool ? "user-chat" : "agent-chat"}`}
    >
      <div className={`d-flex ${bool?"flex-row-reverse":"flex-row"} align-items-center`}>
        <Image
          src={`${data.sender === "user" ? uImage : aImage}`}
          width={60}
          height={70}
          className="align-self-start"
          roundedCircle
          fluid
        ></Image>
        <div className={`chat-container ${bool && "d-flex flex-column align-items-end user-align"}`}>
        <p className="chat-body d-block">{data.message}</p>
        <ReactTimeAgo date={Date.parse(data.createdAt)} locale="en-US" />
        </div>
      </div>
      
    </div>
  );
};

export default Chat;
