import "../styles/Userwindow.css";
import User from "./User";
import { useState } from "react";

const Userwindow = ({ onUserClick }) => {
  const [activeUser, setActiveUser] = useState(1);
  return (
    <div className="user-window">
      <div className="header-userwindow d-flex direction-column justify-content-center">
        <h3 className="heading mt-2">
          <span className="logo"></span>ChatApp
        </h3>
      </div>
      <User
        onUserClick={onUserClick}
        id={0}
        setActiveUser={setActiveUser}
        name="agent"
        active={activeUser === 0 ? true : false}
      />
      <User
        onUserClick={onUserClick}
        id={1}
        setActiveUser={setActiveUser}
        name="user"
        active={activeUser === 1 ? true : false}
      />
    </div>
  );
};

export default Userwindow;
