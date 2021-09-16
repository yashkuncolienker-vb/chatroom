import ReactTimeAgo from "react-time-ago";
import "../styles/Chat.css";
import { Image } from "react-bootstrap";
import uImage from "../assets/user.png";
import aImage from "../assets/agent.png";

const Chat = ({ data }) => {
  const bool = data.sender === "user";
  return (
    <div
      className={`d-flex mb-3 ${
        bool ? "flex-row-reverse" : "flex-row"
      } align-items-center`}
    >
      <Image
        src={`${data.sender === "user" ? uImage : aImage}`}
        width={60}
        height={70}
        className="align-self-start"
        roundedCircle
        fluid
      ></Image>
      <div
        className={`chat-container d-flex flex-column ${
          bool ? "align-items-end user-align" : "align-items-start"
        }`}
      >
        <p
          className={`chat-body d-block ${
            bool ? "user-chat-style" : "agent-chat-style"
          }`}
        >
          {data.message}
        </p>
        <ReactTimeAgo
          className="timestamp"
          date={Date.parse(data.createdAt)}
          locale="en-US"
        />
      </div>
    </div>
  );
};

export default Chat;
