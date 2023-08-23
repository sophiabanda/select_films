// import React, { useState, useEffect } from "react";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ToggleButton from "react-bootstrap/ToggleButton";

// export const FavoriteFilms = ({
//   user,
//   storedToken,
//   filmId,
//   handleUpdateUser,
// }) => {
//   console.log("USER:", user);
//   console.log("TOKEN:", storedToken);
//   console.log("FILMID:", filmId);
//   console.log("UPDATEUSER:", handleUpdateUser);
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const isFilmFavorite = user.favoriteFilms.includes(filmId);
//     setIsFavorite(isFilmFavorite);
//   }, [user.favoriteFilms, filmId]);

//   const handleFavoriteToggle = () => {
//     setIsFavorite((prevState) => !prevState);

//     if (isFavorite) {
//       removeFavorite();
//     } else {
//       addFavorite();
//     }
//   };

//   const removeFavorite = () => {
//     fetch(
//       `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           handleUpdateUser(user);
//           console.log("Film successfully removed from favorites.");
//         }
//       })
//       .catch((error) => console.log("Film was not deleted.", error));
//   };

//   const addFavorite = () => {
//     fetch(
//       `https://sophia-films.herokuapp.com/users/${user._id}/films/${filmId}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           handleUpdateUser(user);
//           console.log("Film successfully added to favorites.");
//           console.log(user);
//         }
//       })
//       .catch((error) => console.log("Film was not added.", error));
//   };

//   return (
//     <>
//       <ButtonGroup toggle>
//         <ToggleButton
//           type="checkbox"
//           variant={isFavorite ? "danger" : "outline-danger"}
//           checked={isFavorite}
//           onChange={handleFavoriteToggle}
//         >
//           {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//         </ToggleButton>
//       </ButtonGroup>
//     </>
//   );
// };
