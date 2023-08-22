import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./favorite-button";

export const FilmCard = ({
  film,
  user,
  storedToken,
  handleUpdateUser,
  filmId,
}) => {
  const { id, title, director, genre, image, summary, favorite } = film;
  return (
    <Card className="h-100">
      <Card.Img src={film.image}></Card.Img>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Link to={`/films/${encodeURI(film.id)}`}>
          <Button>More detail</Button>
          <FavoriteButton film={film} user={user} filmId={id} />
        </Link>
      </Card.Body>
    </Card>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.

//checkbox, radio button
