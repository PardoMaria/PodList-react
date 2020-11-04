import React from 'react';
import { addToList } from '../../services/Api';


export function AddToList({listId, podcast}) {
  const addtolist = () => {
    addToList(listId, podcast)
    .then((res) => {
      console.log(`${res}Guardado en la lista!`)
      window.alert(`${res}Guardado en la lista!`)
    })
    .catch(e => console.log(e))
    //TODO: HANDLE RESPONSE-hecho pero MEJORAR
  }

    return <button onClick={addtolist}>Add to list</button>
}
   