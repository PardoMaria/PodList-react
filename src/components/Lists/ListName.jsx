import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { editList } from '../../services/Api'
import 'bootstrap/dist/css/bootstrap.min.css'
import EditListName from './EditListName';


export default function ListName({list}) {
    const [listName, setListName] = useState(list.name);
    const [body, setBody] = useState(null);
    const handleChange = (val, name) => {
    setBody({
      ...body,
      [name]: val,
    });
  };
    const onSubmit = (e) => {
    e.preventDefault();
    console.log("body", body);
    editList(body)
      .then((editedNameList) => {
        console.log("Edited name list", editedNameList);
        setListName(editedNameList);
      })
      .catch((e) => console.log(e));
  };
  return (
      <div>
        <h2 value={listName} variant="h5" component="h2">{list.name}</h2>
  
      <div>
        <Link to={`/list/${list.id}`}>Ver lista</Link>
      </div>
      <div>
        <Link to={`/list/edit/${list.id}`}>Editar</Link>
      </div>
    </div>
  );
}