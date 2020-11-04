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
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
​
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div> */}
        {/* <div className="calendar-btn">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Edit name list
        </button>
      </div>
​
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editing name list
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={body?.name}
                    name="name"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) =>
                    handleChange(e.target.value, e.target.name)
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Save reminder
              </button>
            </div>
          </div>
        </div>
      </div>
      </div> */}
      <div>
        <Link to={`/list/${list.id}`}>Ver lista</Link>
      </div>
      <div>
        <Link to={`/list/edit/${list.id}`}>Editar</Link>
      </div>
      {/* <EditListName list={listName}/> */}
    </div>
  );
}