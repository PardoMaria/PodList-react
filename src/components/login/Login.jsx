import React, {useState} from 'react'
import InputWithLabel from '../login/input-with-label/InputWithLabel'
import {login} from '../../services/Api'
import {Redirect} from 'react-router-dom'
import '../login/Login.css'

export default function Login({user, logIn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
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
        <>
        <div className="main">
            <div className="login">
                {error && <p><strong>Oops</strong> {error}</p>}
                <form onSubmit={onSubmit}>
                    <InputWithLabel
                        value={email}
                        label="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <InputWithLabel
                        value={password}
                        label="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="button-login" type="submit">Log In</button>
                </form>
            </div>
        </div>
        </>
    )
}