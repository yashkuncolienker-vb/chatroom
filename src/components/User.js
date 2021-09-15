import "../styles/User.css";
const User = ({name}) => {
    return (
        <div className={name==="user"?"user":"agent"} >
            {name}
        </div>
    )
}

export default User
