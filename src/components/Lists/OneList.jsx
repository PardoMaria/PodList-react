import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showOneList } from '../../services/Api';
import PodcastList from '../Lists/PodcastList';
import '../Lists/OneList.css'

const OneList = () => {
    const [list, setList] = useState();
    const {id} = useParams()
 
  
    const getOneList = () => {
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
    console.log(id)
    console.log(list)

    return (
        <div className="list-container">
        <h2 className="list-name">{list?.name}</h2>
        {list && 
            list.podcasts.map((podcast) => (
          <PodcastList podcast={podcast}/>
        ))}
      </div>
    );
};

export default OneList;