import "../styles/Userwindow.css";
import User from "./User";


const Userwindow = () => {
  return (
    <div className="user-window">
      <User name="user"  />
      <User name="agent" />
    </div>
  );
};

export default Userwindow;
