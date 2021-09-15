import { Row, Col, Image } from "react-bootstrap";
import "../styles/User.css";
import profileUser from "../assets/user.png";
import profileAgent from "../assets/agent.png";

const User = ({ name, active, id, onUserClick, setActiveUser }) => {
  const clickHandler = () => {
    setActiveUser(id);
    onUserClick(name);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${name === "user" ? "user" : "agent"} ${
        active ? "bg-2" : "bg-1"
      }`}
    >
      <Row className="m-0">
        <Col className="p-0" xs={4}>
          <Image
            className="m-3"
            src={name === "user" ? profileUser : profileAgent}
            width={60}
            height={70}
            roundedCircle
            fluid
          ></Image>
        </Col>
        <Col className="p-0 d-flex flex-column justify-content-center">
          <h5>{name}</h5>
        </Col>
      </Row>
    </div>
  );
};

export default User;
