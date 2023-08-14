import { Button, Link, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoriteFilms } from "./favorite-films";

export const ProfileView = ({ user, films }) => {
  return (
    <>
      <Row>
        <Col>
          <h1 className="text">Username: {user.Name}</h1>
          <h2 className="text">Email: {user.Email}</h2>
          <h2 className="text">
            Birthday:{" "}
            {new Date(user.Birthday).toLocaleDateString(undefined, {
              timeZone: "UTC",
            })}
          </h2>
        </Col>
        <Col>
          <div>
            <FavoriteFilms films={films} user={user}></FavoriteFilms>
          </div>
          <Link to={`/user/${encodeURI(user._id)}`}>
            <Button>Update user information</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

//modal should pop up for each button
