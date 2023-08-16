// import { useState } from "react";

// export const FavoriteFilms = ({ user, films, storedToken }) => {
//   const [isFavorite, setIsFavorite] = useState(false);
//     const faveFilms = films.filter((f) => user.Favorites.includes(f.id));

//   const removeFavorite = () => {
//     fetch(
//       `https://sophia-films.herokuapp.com/users/${user._id}/films/${films._id}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           console.log("Film successfully removed from favorites.");
//         }
//       })
//       .catch((error) => console.log("Film was not deleted.", error));
//   };

//   const addFavorite = () => {
//     fetch(
//       `https://sophia-films.herokuapp.com/users/${user._id}/films/${films._id}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           console.log("Film successfully added to favorites.");
//         }
//       })
//       .catch((error) => console.log("Film was not added.", error));
//   };
// };
