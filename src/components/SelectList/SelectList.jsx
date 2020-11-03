import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import { AddToList } from '../Podcast/AddToList';


export default function SimpleSelect({lists, podcast}) {
  const [listId, setListId] = React.useState(lists[0].id);
  const handleChange = (event) => {
    setListId(event.target.value);
  };
  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">List</InputLabel>
        <select
          value={listId}
          onChange={handleChange}
        >
         {lists.map((l) => {
            return <option value={l.id}>{l.name}</option>
            })}
          
        </select>
      </FormControl>
      <AddToList listId={listId} podcast={podcast}/>
     
    </div>
  );
}