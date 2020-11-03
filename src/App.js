import React, { useState } from 'react';
import {getPodcastsFromSpotify} from './services/Api'
import PodcastCard from './components/Podcast/PodcastCard';
import NavBar from './components/NavBar/NavBar'
import { Redirect, Route, Switch } from 'react-router-dom';
import SearchPodcast from './components/Podcast/SearchPodcast';
import Login from './components/Login/Login'
import Lists from './components/Lists/Lists';
import OneList from './components/Lists/OneList';


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
        <SearchPodcast />
        <Switch>
        
        <Route path="/login" render={(props) => <Login {...props} user={user} logIn={loggedIn} />} />
        {/* <Route path="/myfavs" render={(props) => <Favs {...props} user={user} logIn={loggedIn} />}/> */}
        <Route path="/lists" render={(props) => <Lists {...props} user={user} logIn={loggedIn} />}/>
        <Route path="/list/:id" render={(props) => <OneList {...props} user={user} logIn={loggedIn} />}/>
        <Redirect to="/"/>
      </Switch>

        </div>
    );
};

export default App;