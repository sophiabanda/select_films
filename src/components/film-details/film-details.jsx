import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export const FilmDetails = ({ films, handleFavoriteToggle, user }) => {
  const { filmId } = useParams();
  const film = films.find((f) => f.id === filmId);
  const isFavorite = films.filter((m) => user.Favorites.includes(m._id));
  const handleFavoriteClick = () => {
    handleFavoriteToggle(filmId);
  };

  return (
    <div className="text">
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
      </div>
      <div>
        <span className="text">Summary: </span>
        <span>{film.summary}</span>
      </div>
      <Link to="/">
        <Button className="back-button">Back</Button>
      </Link>
      <ButtonGroup toggle>
        <ToggleButton
          type="checkbox"
          variant={isFavorite ? "danger" : "outline-danger"}
          checked={isFavorite}
          onChange={handleFavoriteClick}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

//safe operator '?'
