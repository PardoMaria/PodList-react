import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function NavBar(props) {
  const u = props.user;

  return (
    <div>
      <div>
        <div>
          <div></div>
          {u ? (
            <div>
              <p>Hi, {u.username.split(" ")[0]}!</p>
              <Link to="/lists">Listas</Link>
              <button color="inherit" onClick={props.logOut}>
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" color="inherit" onClick={props.logIn}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
