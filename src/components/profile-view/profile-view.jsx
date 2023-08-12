import { Button, Link } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = ({ user }) => {
  return (
    <>
      <div>
        <h1 className="text">Username: {user.Name}</h1>
        <h2 className="text">Email: {user.Email}</h2>
        <h2 className="text">Username: {user.Name}</h2>
        <Link to={`/user/${encodeURI(user._id)}`}>
          <Button>Update user information</Button>
        </Link>
      </div>
    </>
  );
};

//modal should pop up for each button
