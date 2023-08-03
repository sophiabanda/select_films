import React from "react";
import { useState } from "react";

export const LogInView = () => {
  const [username, setUsername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
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
        ></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
