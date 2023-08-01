export const FilmCard = ({ film, onFilmClick }) => {
  return (
    <div
      onClick={() => {
        onFilmClick(film);
      }}
    >
      {film.title}
    </div>
  );
};

//onClick event listener cannot
//be used in components, only in regular divs.
