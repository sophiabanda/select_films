export const FilmDetails = ({ film, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={film.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{film.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{film.author}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
