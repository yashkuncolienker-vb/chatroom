import "../styles/Userwindow.css";
import User from "./User";


const Userwindow = ({onUserClick}) => {
  return (
    <div className="user-window">
      <User onUserClick={onUserClick} name="user"  />
      <User onUserClick={onUserClick} name="agent" />
    </div>
  );
};

export default Userwindow;
