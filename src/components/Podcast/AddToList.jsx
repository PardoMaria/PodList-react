import React, { useState } from 'react';
import { addToList } from '../../services/Api';
import { Redirect } from 'react-router-dom';
import '../Podcast/AddToList.css'


export function AddToList({listId, podcast}) {
  const [redirect, setRedirect] = useState(false);

  const addtolist = () => {
    addToList(listId, podcast)
    .then((res) => {
      setRedirect(true);
      // console.log(`${res}Guardado en la lista!`)
    })
    .catch(e => console.log(e))
  }
  if (redirect) {
    return <Redirect to={`/list/${listId}`} />
}
    return <button className="button-list" onClick={addtolist}>Add to list</button>
}
   