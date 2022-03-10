import React, { useState } from "react";
import {Error} from "../styles";
import Habit from "./Habit.png";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={Habit} alt="Habitual Logo" className="avatar" />
        </div>


        <div className="container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="container">
          <button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
        </div>

        <div className="container">
          <h3>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </h3>
        </div>
  
      </form>
    </div>
  );
}

export default LoginForm;
