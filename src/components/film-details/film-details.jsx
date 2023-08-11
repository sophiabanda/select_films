import { Button } from "react-bootstrap";

export const FilmDetails = ({ film, onBackClick }) => {
  return (
    <div className="text">
      <div>
        <img
          alt="Original film poster for film"
          className="film-poster"
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
      <Button onClick={onBackClick}>Back</Button>
    </div>
  );
};

//safe operator '?'
