import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editList } from '../../services/Api';
import { showOneList } from '../../services/Api';


export default function EditListName() {
    const [list, setList] = useState();
    const {id} = useParams()
  
    const getOneList = () => {
        console.log("pepe2");
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
    // const [lists, setLists] = useState([]);
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
        // TODO: do something to redirect to /list/:listid
      })
      .catch((e) => console.log(e));
  };

//   if (nameModified) {
//       return <Redirect to="l...." />
//   }

  return (
      <div style={{border:"1px solid red"}}>
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
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Guardar nombre
</button>
          </div>)
            }
    </div>
  );
}