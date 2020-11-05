import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { editList } from '../../services/Api'
import 'bootstrap/dist/css/bootstrap.min.css'
import EditListName from './EditListName';
import '../Lists/Lists.css'


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
      <div className="list-card">
        <h2 className="list-title" value={listName} variant="h5" component="h2">{list.name}</h2>
  
      <div>
        <Link className="list-link" to={`/list/${list.id}`}>Ver lista</Link>
      </div>
      <div>
        <Link className="list-link" to={`/list/edit/${list.id}`}>Editar</Link>
      </div>
    </div>
  );
}