import { Button, Link } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoriteFilms } from "./favorite-films";

export const ProfileView = ({ user, films }) => {
  return (
    <>
      <div>
        <h1 className="text">Username: {user.Name}</h1>
        <h2 className="text">Email: {user.Email}</h2>
        <h2 className="text">
          Birthday:{" "}
          {new Date(user.Birthday).toLocaleDateString(undefined, {
            timeZone: "UTC",
          })}
        </h2>
        <div>
          {/* <FavoriteFilms films={films} user={user}></FavoriteFilms> */}
        </div>
        <Link to={`/user/${encodeURI(user._id)}`}>
          <Button>Update user information</Button>
        </Link>
      </div>
    </>
  );
};

//modal should pop up for each button
