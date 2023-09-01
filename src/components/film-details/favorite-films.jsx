import { Button } from "react-bootstrap";
import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export const FavoriteFilms = ({
  user,
  storedToken,
  filmId,
  handleUpdateUser,
}) => {
  const isFavorite = user.Favorites?.includes(filmId);
  const removeFavorite = async () => {
    try {
      const res = await fetch(
        `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      if (res.ok) {
        const newUser = await res.json();
        handleUpdateUser(newUser);
      }
    } catch (error) {
      console.log("Film was not deleted.", error);
    }
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
          response
            .json()
            .then((newUser) => {
              handleUpdateUser(newUser);
            })
            .catch((error) => console.log("Film was not added.", error));
        }
      })
      .catch((error) => console.log("Film was not added.", error));
  };

  return (
    <>
      {isFavorite ? (
        <Button className="favorite-button" onClick={removeFavorite}>
          &#128525;
        </Button>
      ) : (
        <Button
          className="favorite-button"
          variant="outline-primary"
          onClick={addFavorite}
        >
          &#9825;
        </Button>
      )}
    </>
  );
};
