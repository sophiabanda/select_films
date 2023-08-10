import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login-view.scss";

export const LogInView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Name: username,
      Password: password,
    };

    fetch("https://sophia-films.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user.");
        }
      })
      .catch((e) => {
        alert("Something went wrong.");
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username: </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></Form.Control>
        <Form.Text></Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password: </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Form.Control>
        <Form.Text></Form.Text>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
