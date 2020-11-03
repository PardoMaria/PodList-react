import React, { useEffect, useState } from 'react';
import { showLists } from '../../services/Api';
 import ListName from '../Lists/ListName';

const Lists = () => {
    const [lists, setLists] = useState([]);

    const getLists = () => {
        showLists()
            .then((res) => {
                console.log(res)
                setLists(res)
            })
            .catch((e => console.log(e)))
    }
    useEffect(()=> {
        getLists()
    },[])
    return (
        <div>
        {lists.length && 
            lists.map((list) => (
          <ListName list={list}/>
        ))}
      </div>
    );
};

export default Lists;