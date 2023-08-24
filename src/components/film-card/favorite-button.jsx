import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";

export const FavoriteFilms = ({
  user,
  storedToken,
  handleUpdateUser,
  filmId,
}) => {
  console.log("USER:", user);
  console.log("TOKEN:", storedToken);
  console.log("UPDATEUSER:", handleUpdateUser);

  const removeFavorite = () => {
    fetch(
      `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Film successfully removed from favorites.");
          handleUpdateUser(user);
        }
      })
      .catch((error) => console.log("Film was not deleted.", error));
  };

  const addFavorite = () => {
    fetch(
      `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Film successfully added to favorites.");
          handleUpdateUser(user);
        }
      })
      .catch((error) => console.log("Film was not added.", error));
  };

  return (
    <>
      <Button onClick={addFavorite}>Add Favorite</Button>
      <Button onClick={removeFavorite}>Remove Favorite</Button>
    </>
  );
};

// useEffect(() => {
//   const isFilmFavorite = user.Favorites.includes(film.id);
//   setIsFavorite(isFilmFavorite);
// }, [user.Favorites, film.id]);

// const handleFavoriteToggle = (filmId) => {
//   setIsFavorite((prevState) => !prevState);
// };

// const removeFavorite = () => {
//   fetch(
//     `https://sophia-films.herokuapp.com/users/${user._id}/films/${film.id}`,
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${storedToken}`,
//       },
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         console.log("Film successfully removed from favorites.");
//       }
//     })
//     .catch((error) => console.log("Film was not deleted.", error));
// };

// const addFavorite = () => {
//   fetch(
//     `https://sophia-films.herokuapp.com/users/${user._id}/films/${film.id}`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${storedToken}`,
//       },
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         console.log("Film successfully added to favorites.");
//         (user) => handleUpdateUser(user);
//         console.log(user);
//       }
//     })
//     .catch((error) => console.log("Film was not added.", error));
// };

// if (isFavorite) {
//   removeFavorite();
// } else {
//   addFavorite();
// }
