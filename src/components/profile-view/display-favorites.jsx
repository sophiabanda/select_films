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
        <h2>Here belong your favorite films!</h2>
      </Col>
    );
  } else {
    return (
      <div
        className="favorites"
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(12rem, 1fr) )",
          gap: "2rem",
        }}
      >
        {showFavorite.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            user={user}
            storedToken={storedToken}
            handleUpdateUser={handleUpdateUser}
          />
        ))}
      </div>
    );
  }
};
