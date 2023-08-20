import { Button } from "react-bootstrap";

export const FavoriteFilms = ({
  user,
  storedToken,
  filmId,
  handleUpdateUser,
}) => {
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
          handleUpdateUser(user);
          console.log("Film successfully removed from favorites.");
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
          handleUpdateUser(user);
          console.log("Film successfully added to favorites.");
          console.log(user);
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
