import React from "react";
import { useState } from "react";

export const LogInView = () => {
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
      body: JSON.stringify(data),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
