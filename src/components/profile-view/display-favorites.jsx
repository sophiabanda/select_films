import React from "react"; // Import React
import { Col, Row } from "react-bootstrap";
import { FilmCard } from "../film-card/film-card";

export const DisplayFavorites = ({ films, user }) => {
  console.log(user, films);
  const showFavorite = films.filter((f) => user.Favorites.includes(f.id));

  if (showFavorite.length === 0) {
    return <Col>Here belong your favorite films.</Col>;
  } else {
    return (
      <Row className="favorites">
        {showFavorite.map((film) => (
          <Col key={film.id}>
            <FilmCard film={film} />
          </Col>
        ))}
      </Row>
    );
  }
};
