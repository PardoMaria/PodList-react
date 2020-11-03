import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showOneList } from '../../services/Api';
import PodcastList from '../Lists/PodcastList';

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
    return (
        <div>
        {list && 
            list.podcasts.map((podcast) => (
          <PodcastList podcast={podcast}/>
        ))}
      </div>
    );
};

export default OneList;