import { Button, ButtonGroup, ToggleButton, Col, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export const FilmDetails = ({ films, user, storedToken, handleUpdateUser }) => {
  const { filmId } = useParams();
  const film = films.find((f) => f.id === filmId);

  const removeFavorite = () => {
    fetch(
      `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Film successfully removed from favorites.");
          handleUpdateUser(user);
        }
      })
      .catch((error) => console.log("Film was not deleted.", error));
  };

  const addFavorite = () => {
    fetch(
      `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Film successfully added to favorites.");
          handleUpdateUser(user);
        }
      })
      .catch((error) => console.log("Film was not added.", error));
  };

  return (
    <Row className="text">
      <Col>
        <div>
          <img
            alt="Original film poster for film"
            className="detail-poster"
            src={film.image}
          />
        </div>
        <div>
          <span className="text">Title: </span>
          <span>{film.title}</span>
        </div>
        <div>
          <span className="text">Director: </span>
          <span>{film.director?.Name}</span>
        </div>
        <div>
          <span className="text">Genres: </span>
          <span>
            {film.genre
              .map((genre) => genre.charAt(0).toUpperCase() + genre.slice(1))
              .join(", ")}
          </span>
          <div>
            <span className="text">Summary: </span>
            <span>{film.summary}</span>
          </div>
        </div>
        <Link to="/">
          <Button className="back-button">Back</Button>
        </Link>
        <Button onClick={addFavorite}>Add Favorite</Button>
        <Button onClick={removeFavorite}>Remove Favorite</Button>
      </Col>
    </Row>
  );
};
