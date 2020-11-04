import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import Lists from './components/Lists/Lists';
import OneList from './components/Lists/OneList';
import EditListName from './components/Lists/EditListName';
import Home from './components/Home/Home';


function App(){

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const loggedIn = (loggedUser) => {
    console.log("setting item")
    localStorage.setItem('user', JSON.stringify(loggedUser))
    setUser(loggedUser)
  }

  const loggedOut = () => {
    localStorage.removeItem('user')
    setUser(undefined)
  }

    
    return (
        <div>
        <NavBar user={user} logOut={loggedOut}/>

        <Switch>
        
        <Route path="/login" render={(props) => <Login {...props} user={user} logIn={loggedIn} />} />
        <Route path="/lists" render={(props) => <Lists {...props} user={user} logIn={loggedIn} />}/>
        <Route path="/list/edit/:id" render={(props) => <EditListName {...props} user={user} logIn={loggedIn} />}/>
        <Route path="/list/:id" render={(props) => <OneList {...props} user={user} logIn={loggedIn} />}/>
        <Route path="/" render={(props) => <Home {...props} user={user} logIn={loggedIn} />} />

      </Switch>

        </div>
    );
};

export default App;