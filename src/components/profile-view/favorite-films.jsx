import { FilmCard } from "../film-card/film-card";

export const FavoriteFilms = ({ user, films }) => {
  const faveFilms = films.filter((f) => user.Favorites.includes(f.id));
  console.log(faveFilms);

  return (
    <>
      {faveFilms.map((film) => {
        <FilmCard film={film} />;
      })}
    </>
  );
};
