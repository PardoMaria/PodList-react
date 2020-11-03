import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({list}) {
  const classes = useStyles();
  const [listName, setListName] = React.useState('');//TODO cambiar el string
console.log(list)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography value={listName} variant="h5" component="h2">{list.name}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/list/${list.id}`}>Learn More</Link>
      </CardActions>
    </Card>
  );
}