import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chatwindow from "./components/Chatwindow";
import Userwindow from "./components/Userwindow";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const chathistory = [
    {
      message: "Hi user",
      createdAt: "2021-09-14T13:23:02.298Z",
      sender: "agent",
      _id: 1,
    },
    {
      message: "How are you doing today",
      createdAt: "2021-09-14T13:23:02.298Z",
      sender: "user",
      _id: 2,
    },
    {
      message: "I am good, how about you",
      createdAt: "2021-09-14T13:23:02.298Z",
      sender: "agent",
      _id: 3,
    },
    {
      message: "I am good, thanks for asking",
      createdAt: "2021-09-14T13:23:02.298Z",
      sender: "user",
      _id: 4,
    },
    {
      message: "How can I help you today ?",
      createdAt: "2021-09-14T13:23:02.298Z",
      sender: "agent",
      _id: 5,
    },
  ];
  const [chats, setChats] = useState(chathistory);
  const [user, setUser] = useState("user");

  const onAdd = (chatData) => {
    setChats([...chats, { _id: chats.length + 1, sender: user, ...chatData }]);
  };
  const onUserClick = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <Row className="w-100 m-0 p-0">
        <Col xs={9} className="m-0 p-0">
          <Chatwindow chats={chats} onAdd={onAdd} />
        </Col>
        <Col xs={3} className="m-0 p-0">
          <Userwindow onUserClick={onUserClick} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
