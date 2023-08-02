import React, { useEffect } from "react";
import { useState } from "react";
import { FilmCard } from "../film-card/film-card";
import { FilmDetails } from "../film-details/film-details";

export const MainView = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  //state variable

  useEffect(() => {
    fetch(`https://sophia-films.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => {
        const filmsFromAPI = data.map((item) => {
          return {
            id: item._id,
            director: item.Director,
            title: item.Title,
            genre: item.Genre,
            image: item.filmPosterImg,
            summary: item.Summary,
            favorite: item.Favorite,
          };
        });
        setFilms(filmsFromAPI);
        console.log(data);
      });
  }, []);

  if (selectedFilm) {
    return (
      <FilmDetails
        film={selectedFilm}
        onBackClick={() => {
          setSelectedFilm(null);
        }}
      />
    );
  }
  if (films.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {films.map((film) => {
        return (
          <FilmCard
            key={film.id}
            film={film}
            onFilmClick={(newSelectedFilm) => {
              setSelectedFilm(newSelectedFilm);
            }}
          />
        );
      })}
    </div>
  );
};
