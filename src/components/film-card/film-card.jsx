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
