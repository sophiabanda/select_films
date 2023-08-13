import React, { useEffect } from "react";
import { useState } from "react";
import { FilmCard } from "../film-card/film-card";
import { FilmDetails } from "../film-details/film-details";
import { LogInView } from "../login-view/login-view";
import { SignUpView } from "../sign-up-view/sign-up-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { UpdateView } from "../profile-view/update-view";

export const MainView = () => {
  //state variables:
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [films, setFilms] = useState([]);
  // const [selectedFilm, setSelectedFilm] = useState(null);

  const onLoggedOut = () => {
    setUser(null), setToken(null);
  };

  const updateUser = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

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
    <BrowserRouter>
      <NavigationBar onLoggedOut={onLoggedOut} user={user}></NavigationBar>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignUpView />
                  </Col>
                )}
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LogInView
                      onLoggedIn={(user, token) => {
                        setUser(user), setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView films={films} user={user} />
                  </Col>
                )}
              </>
            }
          ></Route>
          <Route
            path="/user/:userId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <UpdateView
                      handleUpdateUser={updateUser}
                      loggedInUser={user}
                      storedToken={storedToken}
                      onLoggedOut={onLoggedOut}
                    />
                  </Col>
                )}
              </>
            }
          ></Route>
          <Route
            path="/films/:filmId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : films.length === 0 ? (
                  <Col>Sadly, there are no films to see here.</Col>
                ) : (
                  <Col md={8}>
                    <FilmDetails films={films} />
                  </Col>
                )}
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : films.length === 0 ? (
                  <Col>Sadly, there are no films to see here.</Col>
                ) : (
                  <>
                    {films.map((film) => (
                      <Col className="mb-4" key={film.id} md={3}>
                        <FilmCard film={film} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          ></Route>
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
