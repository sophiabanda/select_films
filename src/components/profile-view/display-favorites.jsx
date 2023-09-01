import React from "react"; // Import React
import { Col, Row } from "react-bootstrap";
import { FilmCard } from "../film-card/film-card";

export const DisplayFavorites = ({
  films,
  user,
  storedToken,
  handleUpdateUser,
}) => {
  console.log("USER:", user);
  const showFavorite = films.filter((f) => user.Favorites?.includes(f.id));

  if (showFavorite.length === 0) {
    return (
      <Col>
        <h2>Here belong your favorite films.</h2>
      </Col>
    );
  } else {
    return (
      <Row className="favorites, justify-content-md-center">
        {showFavorite.map((film) => (
          <Col xs={6} md={4} key={film.id}>
            <FilmCard
              film={film}
              user={user}
              storedToken={storedToken}
              handleUpdateUser={handleUpdateUser}
            />
          </Col>
        ))}
      </Row>
    );
  }
};
