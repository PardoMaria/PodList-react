import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const u = props.user

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
            {console.log(u)}
          {u ? (
            <div>
              <p>Hi, {u.email.split('@')[0]}!</p>
              <Link to="/myfavs">Favs</Link>
              <Link to="/mylists">Favs</Link>
              <Button color="inherit" onClick={props.logOut}>Log Out</Button>
            </div>
          ) : (
              <div>
                <Button  to="/login" color="inherit" onClick={props.logIn}>Login</Button>
              </div>
            ) 
            }


        </Toolbar>
      </AppBar>
    </div>
  );
}