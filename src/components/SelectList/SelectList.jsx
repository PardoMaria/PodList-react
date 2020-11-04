import React from "react";
import { AddToList } from "../Podcast/AddToList";

export default function SimpleSelect({ lists, podcast }) {
  const [listId, setListId] = React.useState(lists[0].id);
  const handleChange = (event) => {
    setListId(event.target.value);
  };
  return (
    <div>
      <form>
        <select value={listId} onChange={handleChange}>
          {lists.map((l) => {
            return (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            );
          })}
        </select>
      </form>
      <AddToList listId={listId} podcast={podcast} />
    </div>
  );
}
