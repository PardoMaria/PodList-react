import React, { useEffect, useState } from 'react';
import { getLikes } from '../../services/Api';
import PodcastCard from '../Podcast/PodcastCard';

const Favs = () => {
    const [likes, setLikes] = useState([]);

    const getFavs = () => {
        getLikes()
            .then((res) => {
                console.log(res)
                setLikes(res)

            })
            .catch((e => console.log(e)))
    }
    useEffect(()=> {
        getFavs()
    },[])
    return (
        <div>
        {likes.length && 
            likes.map((like) => (
          <PodcastCard podcast={like.podcast}/>
        ))}
      </div>
    );
};

export default Favs;