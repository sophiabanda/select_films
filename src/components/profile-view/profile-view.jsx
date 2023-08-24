import { Button, Link, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DisplayFavorites } from "./display-favorites";

export const ProfileView = ({ user, films }) => {
  console.log("USER", user);

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
          <Link to={`/user/${encodeURI(user._id)}`}>
            <Button>Update user information</Button>
          </Link>
        </Col>
        <DisplayFavorites user={user} films={films} />
      </Row>
    </>
  );
};
