import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { editList } from '../../services/Api';
import { showOneList } from '../../services/Api';
import '../Home/Home.css'


export default function EditListName() {
    const [list, setList] = useState();
    const {id} = useParams()
    const [redirect, setRedirect] = useState(false);
  
    const getOneList = () => {
        console.log(id);
        showOneList(id)
            .then((res) => {
                console.log(res)
                setList(res)
            })
            .catch((e => console.log(e)))
    }

    useEffect(()=> {
        getOneList()
    },[])

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
    editList(list.id, body)
      .then((editedNameList) => {
        console.log("Edited name list", editedNameList);
        setRedirect(true);
      })
      .catch((e) => console.log(e));
  };

  if (redirect) {
      return <Redirect to="/lists" />
  }

  return (
      <div>
            {list && (<div>
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
              <button
                type="button"
                className="button save"
                onClick={onSubmit}
              >
                Guardar nombre
</button>
          </div>)
            }
    </div>
  );
}