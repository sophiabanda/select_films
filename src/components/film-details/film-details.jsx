export const FilmDetails = ({ film, onBackClick }) => {
  return (
    <div>
      <div>
        <img className="film-poster" src={film.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{film.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{film.director.Name}</span>
      </div>
      <div>
        <span>Genres: </span>
        <span>{film.genre}</span>
      </div>
      <div>
        <span>Summary: </span>
        <span>{film.summary}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
