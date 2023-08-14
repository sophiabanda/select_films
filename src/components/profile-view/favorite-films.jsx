export const FavoriteFilms = ({ user, films }) => {
  const faveFilms = films.filter((f) => user.Favorites.includes(f.id));
  console.log(faveFilms);
};
