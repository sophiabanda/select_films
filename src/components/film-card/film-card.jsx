export const FilmCard = ({ film, onFilmClick }) => {
  return (
    <div
      onClick={() => {
        onFilmClick(film);
      }}
    >
      <img src={film.image}></img>
      <h1>{film.title}</h1>
    </div>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.
