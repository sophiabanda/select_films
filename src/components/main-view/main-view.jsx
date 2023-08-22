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
import { FavoriteButton } from "../film-card/favorite-button";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [films, setFilms] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const onLoggedOut = () => {
    setUser(null),
      setToken(null),
      localStorage.removeItem("user"),
      localStorage.removeItem("token");
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

  useEffect(() => {
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
            (user) => handleUpdateUser(user);
            console.log(user);
          }
        })
        .catch((error) => console.log("Film was not added.", error));
    };
  }, [user.Favorites, filmId]);

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
                    <ProfileView
                      storedToken={storedToken}
                      films={films}
                      user={user}
                      removeFavorite={removeFavorite}
                      addFavorite={addFavorite}
                    />
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
                      removeFavorite={removeFavorite}
                      addFavorite={addFavorite}
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
                    <FilmDetails
                      storedToken={storedToken}
                      user={user}
                      films={films}
                      handleUpdateUser={updateUser}
                      removeFavorite={removeFavorite}
                      addFavorite={addFavorite}
                    />
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
                        <FilmCard
                          film={film}
                          user={user}
                          storedToken={storedToken}
                          handleUpdateUser={updateUser}
                        />
                        <FavoriteButton film={film} user={user} />
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
