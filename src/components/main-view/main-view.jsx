import React, { useEffect } from "react";
import { useState } from "react";
import { FilmCard } from "../film-card/film-card";
import { FilmDetails } from "../film-details/film-details";
import { LogInView } from "../login-view/login-view";
import { SignUpView } from "../sign-up-view/sign-up-view";
import { Row, Col } from "react-bootstrap";
import "./main-view.scss";

export const MainView = () => {
  //state variables:
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`https://sophia-films.herokuapp.com/films`, {
      headers: { Authorization: `Bearer ${token}` },
    })
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
        const sortedFilms = filmsFromAPI.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setFilms(sortedFilms);
      });
  }, [token]);

  return (
    <Row className="justify-content-md-center">
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </button>
      {!user ? (
        <Col md={5}>
          <LogInView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or
          <SignUpView />
        </Col>
      ) : selectedFilm ? (
        <Col md={8}>
          <FilmDetails
            film={selectedFilm}
            onBackClick={() => {
              setSelectedFilm(null);
            }}
          />
        </Col>
      ) : films.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
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
        </>
      )}
    </Row>
  );
};
