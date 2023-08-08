import React, { useEffect } from "react";
import { useState } from "react";
import { FilmCard } from "../film-card/film-card";
import { FilmDetails } from "../film-details/film-details";
import { LogInView } from "../login-view/login-view";

export const MainView = () => {
  //state variables:
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(`https://sophia-films.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => {
        const filmsFromAPI = data.map((item) => {
          const genre = item.Genres.map((genre) => genre.Type);
          return {
            id: item._id,
            director: item.Director,
            title: item.Title,
            genre: genre,
            image: item.filmPosterImg,
            summary: item.Summary,
            favorite: item.Favorite,
          };
        });
        setFilms(filmsFromAPI);
        console.log(data);
      });
  }, [token]);

  if (!token) {
    return;
  }

  if (!user) {
    return (
      <LogInView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
    );
  }

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
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
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
