import "../styles/User.css";

const User = ({ name, onUserClick }) => {
  const clickHandler = () => {
    onUserClick(name);
  };
  return (
    <div onClick={clickHandler} className={name === "user" ? "user" : "agent"}>
      {name}
    </div>
  );
};

export default User;
