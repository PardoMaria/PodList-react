import React, { useState } from "react";
import InputWithLabel from "./input-with-label/InputWithLabel";


import { login } from "../../services/Api";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Login({ user, logIn }) {
  console.log("HOLA LOGIN FUNCT")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    console.log("EMAIL: " + email)
    e.preventDefault();
    login(email, password)
      .then((user) => {
        console.log("HOLA LOGINJSX")
        logIn(user)
      })
      .catch((e) => setError(e.response?.data?.message));
  };


  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={onSubmit}>
        <InputWithLabel
          value={email}
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputWithLabel
          value={password}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <div className='pt-3'>
        <Button variant="contained" color="primary" type='submit'>
            Login
      </Button>
        </div>

      </form>

    </div>
  );
}
