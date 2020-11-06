import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar(props) {
  const u = props.user;

  return (
    <header className="header">
      {u ? (
        <>
        <div>
        <p className="username">Hola, {u.username.split(" ")[0]} {'\u2728'}!</p>
        </div>
        <nav className="navbar">
          <Link to="/lists">
            <p className="navbar-links">💖 Listas</p>
          </Link>
          <Link to="/">
            <p className="navbar-links">🏠 Home</p>
          </Link>
          <button className="button" onClick={props.logOut}>
            Log Out
          </button>
        </nav>
        </>
      ) : (
        <div>
          <Link to="/login" onClick={props.logIn}>
            <p className="navbar-links">Login</p>
          </Link>
        </div>
      )}
    </header>
  );
}
