import { Button, Link, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DisplayFavorites } from './display-favorites';

export const ProfileView = ({ user, films, storedToken, handleUpdateUser }) => {
  return (
    <>
      <Row>
        <span className="user-info">
          <Col>
            <h1 className="text">Username: {user.Name}</h1>
            <h2 className="text">Email: {user.Email}</h2>
            <h2 className="text">
              Birthday:{' '}
              {new Date(user.Birthday).toLocaleDateString(undefined, {
                timeZone: 'UTC',
              })}
            </h2>
            <div className="update-button">
              <Link to={`/user/${encodeURI(user._id)}`}>
                <Button>Update user information</Button>
              </Link>
            </div>
          </Col>
        </span>
      </Row>
      <Row>
        <DisplayFavorites
          user={user}
          films={films}
          handleUpdateUser={handleUpdateUser}
          storedToken={storedToken}
        />
      </Row>
    </>
  );
};
